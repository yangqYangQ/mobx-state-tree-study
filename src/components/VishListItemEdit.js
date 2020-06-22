import React from "react";
import { observer } from "mobx-react";

const WishListItemEdit = ({ item }) => {
  const onNameChange = ({ target: { value } }) => {
    item.changeName(value);
  };

  const onPriceChange = ({ target: { value } }) => {
    const price = Number(value);

    if (!isNaN(price)) {
      item.changePrice(price);
    }
  };

  return (
    <div>
      <input value={item.name} onChange={onNameChange} />
      <input value={item.price} onChange={onPriceChange} />
    </div>
  );
};

export default observer(WishListItemEdit);
