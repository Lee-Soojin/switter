const TOKEN = "token";

export default class tokenStorage {
  saveToken(token) {
    if (typeof window !== "undefined") localStorage.setItem(TOKEN, token);
  }
  getToken() {
    if (typeof window !== "undefined") return localStorage.getItem(TOKEN);
  }
  clearToken() {
    if (typeof window !== "undefined") localStorage.clear();
  }
}
