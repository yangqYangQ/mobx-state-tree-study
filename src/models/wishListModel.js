import { types, destroy } from "mobx-state-tree";
import wishListItem from "./wishListItemModel";

const wishList = types
  .model({
    items: types.optional(types.array(wishListItem), [])
  })
  .actions(self => ({
    addItem(item) {
      self.items.push(item);
    },
    remove(item) {
      // self.items.splice(self.items.indexOf(item), 1);
      destroy(item);
    }
  }))
  .views(self => ({
    get totalPrice() {
      return self.items.reduce((sum, entry) => sum + entry.price, 0);
    }
  }));

export default wishList;
