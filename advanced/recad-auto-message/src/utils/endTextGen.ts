import text from "./text"
import { DocsText, RequiredDocs } from "./docsInterface"
import FinalTextDocuments from "./endTextObject"

import { invalidDocumens, standardDocuments } from "./documents and models/pendingDocuments"

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
  private supportNumber: string
  fields: RequiredDocs | FinalTextDocuments

  constructor(fields: RequiredDocs | FinalTextDocuments) {
    this.fields = fields
    this.textFields = []
    this.supportNumber = "\nNúmero do suporte: +55 (96) 3082-1277\nHorários: 08:00 às 17:00, segunda a sexta\n"
  }

  addTextFields(): Array<string> | [] {
    for (const i in this.fields) {
      if (this.fields[i] === true) {
        this.textFields.push(i)
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

  validateFields () {

  }

  returnFinalText(): any {
    const campos = []
    let support: string = ""
    for (const i in this.fields) {
      if (typeof this.fields[i] !== "string") {
        campos.push(this.fields[i] === true ? "" : standardDocuments[i])
      } else {
        support = this.fields[i] === 'dep/id/10' ? this.supportNumber : ""
        campos.push(invalidDocumens[this.fields[i]])
      }
    }

    for (let i = 0; i < campos.length; i++) {
      if (typeof campos[i] === "string" && campos[i].length === 0) continue
      if (typeof campos[i] === "undefined") continue

      if (campos[i]) 

      this.midText += `- ${campos[i]};\n`
    }

    return this.upper + "\n" + this.midText + support + this.bottom
  }
}

export default EndText
