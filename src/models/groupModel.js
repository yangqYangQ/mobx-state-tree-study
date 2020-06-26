import {applySnapshot, flow, types} from 'mobx-state-tree';
import User from './userModel';

const Group = types.model({
  users: types.map(User)
}).actions(self => ({
  afterCreate() {
    self.load();
  },
  load: flow(function* () {
    const response = yield window.fetch('http://localhost:3001/users');
    const users = yield response.json();
    applySnapshot(self.users, users);
  }),
}));

export default Group;
