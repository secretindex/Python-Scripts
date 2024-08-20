const invalidDocumens = {
  "cr/60": `- Comprovante de residência emitido nos últimos 60 dias;\nObs: Comprovante enviado foi emitido em MES. Favor, enviar um comprovante recente;`,
  "dr/n": `- Declaração de Residência (anexo II no link abaixo)\nObs: Comprovante enviado está em nome de terceiros. Favor, assinar e enviar a declaração acima;`,
  "id/10": `- Documento de identidade;\nObs: Documento de identidade enviado foi emitido em ANO, ultrapassando o limite de 10 anos desde a data de emissão. Caso não haja outro documento para substituir (CNH, Conselho de Classe ou Passaporte), entre em contato com nosso suporte informando seu caso;`,
  "id/n": "- Documento de Identidade emitido nos últimos 10 anos (RG ou CNH ou Conselho de Classe ou Passaporte ou Carteira de Identidade Militar);",
  "cns/n": "- Certidão de Nascimento;",
  "cerc/n": "- Certidão de Casamento;",
  "cav/n": "- Certidão de casamento averbada;",
  "un/n": "- Declaração de união estável + Certidão de Nascimento;",
  "dsvu/n": "- Deciaração de união estável + Certidão de Casamento averbada;",
  "deco/n": "- Enviar declaração de dependência econômica do dependente DEP;",
  "dp/n": "- Enviar documento de identidade do dependente DEP;",
  "tgc/n": "- Enviar termo de guarda do dependente DEP;",
  "dp/21": "- Em caso de dependente filho(a) com mais de 21 anos, é necessário que se envie laudo/atestado médico caso declarado inválido. Caso não, remover como dependente previdenciário;",
  "dep/id/n": "- Enviar documento de identidade dos dependentes DEPS",
  "cnd/n": "- Enviar certidão de nascimento do dependente DEP;",
}

const pendingDocuments = {
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
