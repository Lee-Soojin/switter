export default class AuthService {
  constructor(http, token) {
    this.http = http;
    this.tokenStorage = token;
  }

  async signUp(username, password, name, email, image) {
    const data = await this.http.fetch(`/auth/signup`, {
      method: "POST",
      body: JSON.stringify({ username, password, name, email, image }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async logIn(username, password) {
    const data = await this.http.fetch(`/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    this.tokenStorage.saveToken(data.token);
    if (data) window.location.href = "/home";
    return data;
  }

  async me() {
    const token = this.tokenStorage.getToken();
    const data = await this.http.fetch(`/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  }

  async logout() {
    return this.tokenStorage.clearToken();
  }
}
