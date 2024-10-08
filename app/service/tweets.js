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
    return this.http.fetch(`/tweets/${username}`, {
      method: "get",
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

  async deleteTweet(id) {
    try {
      const response = await this.http.fetch(`/tweets`, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: this.getHeaders(),
      });
      if (response.ok) {
        const data = await response.json();
        return data.message;
      } else {
        throw new Error(`Failed to delete: ${response.statusText}`);
      }
    } catch (error) {
      throw error;
    }
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
