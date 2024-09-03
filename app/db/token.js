const TOKEN = "token";

export default class tokenStorage {
  saveToken(token) {
    window.localStorage.setItem(TOKEN, token);
  }
  getToken() {
    return window.localStorage.getItem(TOKEN);
  }
  clearToken() {
    window.localStorage.clear();
  }
}
