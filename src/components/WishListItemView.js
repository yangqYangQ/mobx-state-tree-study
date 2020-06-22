import React, { useState, useMemo } from "react";
import { clone, getSnapshot, applySnapshot } from "mobx-state-tree";
import WishListItemEdit from "./VishListItemEdit";

const WishListItemView = ({ item }) => {
  const [isEditing, setIsEditing] = useState(false);

  const clonedItem = useMemo(() => clone(item), [item]);

  const renderEditable = () => (
    <li>
      <WishListItemEdit item={clonedItem} />
      <button onClick={cancelEdit}>取消</button>
      <button onClick={saveEdit}>保存</button>
    </li>
  );

  const toggleEdit = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const saveEdit = () => {
    applySnapshot(item, getSnapshot(clonedItem));
    setIsEditing(false);
  };

  return isEditing ? (
    renderEditable()
  ) : (
    <li>
      name: {item.name}
      <div>price: {item.price}</div>
      <span>
        <button onClick={toggleEdit}>修改</button>
        <button onClick={item.remove}>刪除</button>
      </span>
    </li>
  );
};

export default WishListItemView;
