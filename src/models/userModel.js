import {types, flow} from 'mobx-state-tree';
//flow function indicates this is an asynchronous process flow
import WishList from './wishListModel';

const User = types.model({
  id: types.string,
  name: types.string,
  // gender: types.union(types.literal("f"), types.literal("m"))
  gender: types.enumeration('gender', ['f', 'm']),
  wishList: types.optional(WishList, {})
}).actions(self => ({
  getSuggestions: flow(function* () {
    const response = yield window.fetch(`http://localhost:3001/suggestions_${self.gender}`);
    const suggestions = yield response.json();
    self.wishList.items.push(...suggestions);
  })
}));

export default User;
