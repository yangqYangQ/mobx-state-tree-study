import React from "react";
import { observer } from "mobx-react";
import "mobx-react-lite/batchingForReactDom";
import WishListItemview from "./WishListItemView";
import WishListEntry from "./WishListEntry";

const WishListView = ({ list }) => {
  return (
    <div>
      <h3>WishLists</h3>
      <ul>
        {list.items.map((item, index) => (
          <WishListItemview key={index} item={item} />
        ))}
      </ul>
      total price： {list.totalPrice}
      <WishListEntry list={list.wishList} />
    </div>
  );
};

export default observer(WishListView);
