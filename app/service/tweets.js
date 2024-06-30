export default class TweetService {
  constructor(http, token) {
    this.http = http;
    this.tokenStorage = token;
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

  async postTweet(username, tweet) {
    return this.http.fetch(`/tweetes`, {
      method: "POST",
      body: {
        username,
        tweet,
      },
      headers: this.getHeaders(),
    });
  }

  async deleteTweet(id) {
    return this.http.fetch(`/tweetes`, {
      method: "DELETE",
      body: { id },
      headers: this.getHeaders(),
    });
  }

  getHeaders() {
    const token = this.tokenStorage.getToken();
    return {
      Authorization: `Bearer ${token}`,
    };
  }
}
