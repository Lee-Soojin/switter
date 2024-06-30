export default class AuthService {
  constructor(http, token) {
    this.http = http;
    this.tokenStorage = token;
  }

  async signUp(username, password, name, email, image) {
    const data = this.http.fetch(`/auth/login`, {
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
    // const data = await data.json();
    console.log(data);
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async me() {
    const token = this.tokenStorage.getToken();
    return this.http.fetch(`/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }

  async logout() {
    return this.tokenStorage.clearToken();
  }
}
