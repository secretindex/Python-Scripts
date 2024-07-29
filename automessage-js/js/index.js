const upperMessage = `De acordo com o disposto no Decreto 7646/2023 e na Portaria 001/2024, seu cadastro foi recusado pela ausência da(s) seguinte(s) imagem(ns):`;
const bottomMessage = `Preencha os termos e declarações abaixo a punho. Também aceitamos assinatura digital com gov.br.

Para ter acesso às declarações e termos citados acesse o link abaixo:
https://storage3.onyxerp.com.br/565083f381ebc836a46f7e10ae5c30.pdf`;

const submitCheckbox = document.querySelector(".submit");
const textarea = document.querySelector("#gen-text");
const formBoxes = document.querySelector(".form-box");

const restartBtn = document.querySelector(".reset-btn");

const restart = () => {
  textarea.value = "";
  const inputs = document.querySelectorAll(`input[type="checkbox"]`);
  inputs.forEach((input) => {
    input.checked = false;
  });
};

const pendingTexts = {
  foto: "Foto do rosto de frente segurando documento de identidade ao lado",
  id: "Documento de Identidade (RG ou CNH ou Conselho de Classe ou Passaporte ou Carteira de Identidade Militar)",
  pis: "PIS/PASEP ou NIT",
  residencia:
    "Comprovante de residência emitido nos últimos 60 dias + Declaração de residência (Anexo II no link abaixo) se o comprovante estiver em nome de terceiros",
  casamento: "Certidão de Casamento",
  certidoes: "Certidão de Casamento/união estável OU Certidão de Nascimento",
  posse: "Termo de Posse",
  contracheque: "Contracheque do mês anterior",
  veracidade: "Termo de veracidade (Anexo VII no link abaixo)",
  nascimento: "Certidão de Nascimento",
  estadoc: "Declaração de estado civil (Anexo III no link abaixo)",
  depid: "Documento de identidade do dependente",
};

const generateResultText = (fields = []) => {
  let middleText = ``;
  for (let i = 0; i < fields.length; i++) {
    middleText += `- ${pendingTexts[fields[i]]};\n`;
  }

  if (!middleText) {
    return "";
  }

  return upperMessage + "\n\n" + middleText + "\n" + bottomMessage;
};

const collectFields = (e) => {
  e.preventDefault();
  textarea.value = "";

  const inputs = document.querySelectorAll(`input[type="checkbox"]`);
  const fields = [];

  inputs.forEach((input) => {
    if (input.checked) {
      console.log(input.getAttribute("name"));
      fields.push(input.getAttribute("name"));
    }
  });

  textarea.value = generateResultText(fields);
  console.log(e);
};

formBoxes.addEventListener("submit", collectFields);

restartBtn.addEventListener("click", restart);
