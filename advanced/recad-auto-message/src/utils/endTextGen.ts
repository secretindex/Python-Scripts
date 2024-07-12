import text from "./text"

class EndText {
  private upper: string = text.upperText
  private bottom: string = text.bottomText
  private midText: string = ""
  constructor(fields: Array<string>) {}

  returnFullText(): string {
    return this.upper + "\n\n" + this.midText + "\n\n" + this.bottom;
  }
}

export default EndText
