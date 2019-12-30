class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = false;
    this.tokens = createTokens(21);
  }
  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token)
    }
    return tokens;
  }
  get unusedTokens(){
    return this.tokens.filter(token => !token.dropped)
  } 
  get activeToken(){
    return this.unusedTokens[0]
  } 
   
}