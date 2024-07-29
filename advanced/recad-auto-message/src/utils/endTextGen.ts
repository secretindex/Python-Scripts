import text from "./text"
import { DocsText, RequiredDocs } from "./docsInterface"

const pendingTexts: DocsText = {
  foto: "Foto do rosto de frente segurando documento de identidade ao lado",
  id: "Documento de Identidade (RG ou CNH ou Conselho de Classe ou Passaporte ou Carteira de Identidade Militar)",
  pis: "PIS/PASEP ou NIT",
  residencia:
    "Comprovante de residência emitido nos últimos 60 dias + Declaração de residência (Anexo II no link abaixo) se o comprovante estiver em nome de terceiros",
  casamento: "Certidão de Casamento",
  posse: "Termo de Posse",
  contracheque: "Contracheque do mês anterior",
  veracidade: "Termo de veracidade (Anexo VII no link abaixo)",
  nascimento: "Certidão de Nascimento",
  estadoc: "Declaração de estado civil (Anexo III no link abaixo)",
  depid: "Documento de identidade do dependente",
  uniao:
    "Certidão de União Estável + Comprovante de estado civil anterior a união (caso fora solteiro, enviar certidão de nascimento. Caso fora casado/divorciado, enviar certidão de casamento com averbação",
  decres:
    "Declaração de residência (Anexo II no link abaixo) caso comprovante esteja em nome de terceiros",
}

class EndText {
  private upper: string = text.upperText
  private midText: string = ""
  private bottom: string = text.bottomText
  private textFields: Array<string>
  fields: RequiredDocs

  constructor(fields: RequiredDocs) {
    this.fields = fields
    this.textFields = []
  }

  addTextFields(): Array<string> | [] {
    for (const i in this.fields) {
      if (this.fields[i] === false) {
        this.textFields.push(i);
      }
    }

    return []
  }

  returnFullText(): string {
    this.addTextFields()
    // type any "error"
    for (let i = 0; i < this.textFields.length; i++) {
      this.midText += `- ${pendingTexts[this.textFields[i]]};\n`
    }

    if (!this.midText) {
      return ""
    }

    return this.upper + "\n" + this.midText + this.bottom
  }
}

export default EndText
