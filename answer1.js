class TokenStore {
  constructor() {
    this.tokens = [];
  }

  ingest(string) {
    this.tokens.push(string);
  }

  appearance(prefix) {
    const matchingTokens = this.tokens.filter((token) =>
      token.startsWith(prefix)
    );
    return matchingTokens.length / this.tokens.length;
  }
}

const store = new TokenStore();
store.ingest("leoluca:uk:dev");
store.ingest("leoluca:hk:design");
store.ingest("leoluca:hk:pm");
store.ingest("leoluca:hk:dev");
store.ingest("skymaker");
console.log(store.appearance("leoluca"));
console.log(store.appearance("leoluca:hk"));
store.ingest("skymaker:london:ealing:dev");
store.ingest("skymaker:london:croydon");
store.ingest("skymaker:london:design");
store.ingest("skymaker:man:pm");
store.ingest("skymaker:man:pm");
console.log(store.appearance("skymaker:man"));
