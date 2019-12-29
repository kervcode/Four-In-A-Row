class Board {
  constructor() {
    this.rows = 6;
    this.colunms = 7;
    this.spaces = createSpaces();
  }

  createSpaces() {
    const spaces = [];

    for (let x = 0; x < this.colunms; x++) {
      const colunms = [];

      for (let y = 0; y < this.rows; y++) {
        const space = new Space(x, y);
        colunm.push(space);
      }

      spaces.push(colunm)
    }
    return spaces;
  }
  drawHTMLBoard() {
    for (let colunm of this.spaces) {
      for (let space of colunm) {
        space.drawSVGSpace();
      }
    }
  }
}