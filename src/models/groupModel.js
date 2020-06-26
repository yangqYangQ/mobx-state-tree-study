import {applySnapshot, flow, types} from 'mobx-state-tree';
import User from './userModel';

const Group = types.model({
  users: types.map(User)
}).actions(self => {
    let controller;
    return {
      afterCreate() {
        self.load();
      },
      load: flow(function* () {
        controller = window.AbortController && new window.AbortController();
        try {
          const response = yield window.fetch(
            'http://localhost:3001/users',
            {
              signal: controller?.signal
            }
          );
          const users = yield response.json();
          applySnapshot(self.users, users);
        } catch (e) {
          console.log('请求终止了');
        }
      }),
      reload() {
        if (controller) controller.abort();
        self.load();
      },
      beforeDestroy() {
        if (controller) controller.abort();
      }
    };
  }
);

export default Group;
