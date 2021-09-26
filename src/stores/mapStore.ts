import { observable } from "mobx";

export const map = observable({
  myLatitude: 0,
  myLongTitude: 0,

  setMyPosition(latitude: number, longTitude: number) {
    this.myLatitude = latitude;
    this.myLongTitude = longTitude;
  },
});
