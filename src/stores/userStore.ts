import { observable } from "mobx";

const user = observable({
  isLoggedIn: false,

  login() {
    this.isLoggedIn = true;
  },
  logout() {
    this.isLoggedIn = false;
  },
});

export { user };
