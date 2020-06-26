import {types, flow} from 'mobx-state-tree';
//flow function indicates this is an asynchronous process flow
import WishList from './wishListModel';

const UserBase = types.model({
  id: types.identifier,
  name: types.string,
  // gender: types.union(types.literal("f"), types.literal("m"))
  gender: types.enumeration('gender', ['f', 'm']),
  wishList: types.optional(WishList, {}),
  recipient: types.maybe(types.reference(types.late(() => User)))
});

const UserActions = types.model({}).actions(self => ({
  getSuggestions: flow(function* () {
    const response = yield window.fetch(`http://localhost:3001/suggestions_${self.gender}`);
    const suggestions = yield response.json();
    self.wishList.items.push(...suggestions);
  })
}));

const User = types.compose(UserBase, UserActions);

export default User;
