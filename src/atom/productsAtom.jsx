import { atom } from "recoil";

const cartState = atom({
  key: "cart",
  default: [],
});

export default cartState;
