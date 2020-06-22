import { types, getParent } from "mobx-state-tree";

const wishListItem = types
  .model({
    name: types.string,
    price: types.number
  })
  .actions(self => ({
    changeName(name) {
      self.name = name;
    },
    changePrice(price) {
      self.price = price;
    },
    remove() {
      getParent(self, 2).remove(self);
    }
  }));

export default wishListItem;
