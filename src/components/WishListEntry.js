import React from 'react';
import WishListItemEdit from './VishListItemEdit';
import WishListItem from '../models/wishListItemModel';

const WishListEntry = ({list}) => {
  const item = WishListItem.create({
    name: '',
    price: 0
  });

  const onItemAdd = () => {
    list.addItem(item);
  };

  return (
    <div>
      <WishListItemEdit item={item}/>
      <button onClick={onItemAdd}>新增</button>
    </div>
  );
};

export default WishListEntry;
