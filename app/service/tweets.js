export default class TweetService {
  constructor(http, token, socket) {
    this.http = http;
    this.tokenStorage = token;
    this.socket = socket;
  }

  async getAllTweets() {
    return this.http.fetch(`/tweets`, {
      method: "get",
      headers: this.getHeaders(),
    });
  }

  async getTweets(username) {
    const query = username ? `username=${username}` : "";
    return this.http.fetch(`/tweets${query}`, {
      method: "GET",
      headers: this.getHeaders(),
    });
  }

  async postTweet(text) {
    const response = await this.http.fetch(`/tweets`, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
      headers: this.getHeaders(),
    });

    if (response) return response;
  }

  async modifyTweet(id, text) {
    return this.http.fetch(`/tweets`, {
      method: "PUT",
      body: JSON.stringify({ id, text }),
      headers: this.getHeaders(),
    });
  }

    return this.http.fetch(`/tweets`, {
      method: "DELETE",
      body: JSON.stringify({ id }),
      headers: this.getHeaders(),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  onSync(callback) {
    return this.socket.onSync("update", callback);
  }
}
