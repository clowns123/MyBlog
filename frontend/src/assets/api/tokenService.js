const LOCALSTORAGE_KEY = "access_token";

const TokenService = class {
  static get() {
    return localStorage.getItem(LOCALSTORAGE_KEY);
  }

  static save(token) {
    localStorage.setItem(LOCALSTORAGE_KEY, token);
  }

  static remove() {
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
};

export default TokenService;
