import { ComplexDocs } from "../../../utils/docsInterface"

const activesDocument: ComplexDocs = {
  foto: {
    name: "Foto + ID",
    required: true,
    present: false,
  },
  id: {
    name: "Identidade",
    required: true,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "sim",
        value: "id/s",
        children: [
          {
            label: "valido",
            value: "id/v"
          },
          {
            label: "+ 10",
            value: "id/10"
          }
        ]
      },
      {
        label: "não",
        value: "id/n"
      }
    ],
  },
  residencia: {
    name: "C. Residencia",
    required: true,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "sim",
        value: "cr/s",
        children: [
          {
            label: "valido",
            value: "cr/v"
          },
          {
            label: "+60",
            value: "cr/60"
          },
          {
            label: "terceiros",
            value: "cr/t",
            children: [
              {
                label: "D. Res",
                value: "dr/u",
                children: [
                  {
                    value: "dr/s",
                    label: "sim"
                  },
                  {
                    value: "dr/n",
                    label: "nao"
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
  },
  estadoCivil: {
    name: "Estado civil",
    required: true,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "solteiro",
        value: "s/u",
        children: [
          {
            label: "sim",
            value: "s/s"
          },
          {
            label: "não",
            value: "s/n"
          }
        ],
      },
      {
        label: "casado",
        value: "c/u",
        children: [
          {
            label: "sim",
            value: "c/s"
          },
          {
            label: "não",
            value: "c/n"
          }
        ]
      },
      {
        label: "uniao",
        value: "u/u",
        children: [
          {
            label: "C. Nascimento",
            value: "nascimento",
            children: [
              {
                label: "sim",
                value: "un/s"
              },
              {
                label: "não",
                value: "un/n"
              }
            ]
          },
          {
            label: "Div/Sep/Vi",
            value: "dsv",
            children: [
              {
                label: "sim",
                value: "dsvu/s"
              },
              {
                label: "não",
                value: "dsvu/n"
              }
            ]
          }
        ]
      }
    ],
  },
  contracheque: {
    name: "Contracheque",
    required: true,
    present: false,
  },
  posse: {
    name: "Termo de Posse",
    required: true,
    present: false,
  },
  veracidade: {
    name: "Termo de Veracidade",
    required: true,
    present: false,
  },
  comprovanteEstado: {
    name: "C. Estado Civil",
    required: true,
    present: false,
  },
  depId: {
    name: "Dependentes",
    required: false,
    present: false,
    options: undefined,
    optionList: [
      {
        label: "sim",
        value: "dep/s",
        children: [
          {
            label: "identidade",
            value: "dep/id",
            children: [
              {
                label: "valida",
                value: "dep/id/v",
                children: [
                  {
                    label: "Dep. Eco",
                    value: "deco/u",
                    children: [
                      {
                        label: "sim",
                        value: "deco/u2",
                        children: [
                          {
                            label: "Decl. D. Eco",
                            value: "deco/u3",
                            children: [
                              {
                                label: "sim",
                                value: "deco/s"
                              },
                              {
                                label: "não",
                                value: "cnd/n"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        label: "não",
                        value: "deco/n"
                      }
                    ]
                  },
                  {
                    label: "Padrão",
                    value: "dp/u",
                    children: [
                      {
                        label: "sim",
                        value: "dp/s"
                      },
                      {
                        label: "não",
                        value: "dp/n"
                      }
                    ]
                  }
                ]
              },
              {
                label: "não",
                value: "dep/id/n"
              },
              {
                label: "+ 10",
                value: "dep/id/10"
              }
            ]
          },
          {
            label: "C. Nascimento",
            value: "cnd/u",
            children: [
              {
                label: "sim",
                value: "cnd/s"
              },
              {
                label: "não",
                value: "cnd/n"
              }
            ]
          }
        ]
      },
      {
        label: "não",
        value: "dep/n"
      }
    ],
  }
}

export default activesDocument