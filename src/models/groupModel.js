import { types } from "mobx-state-tree";
import User from "./userModel";

const Group = types.model({
  users: types.map(User)
});

export default Group;
