import { ComplexDocs } from "../../utils/docsInterface"
import { SecondCheckboxContext } from "../../contexts/SecondCheckboxContext"
import EndText from "../../utils/endTextGen"

const documents: ComplexDocs = {
  foto: {
    name: "Foto + id",
    required: true,
    present: false,
  },
  id: {
    name: "Identidade",
    required: true,
    present: false,
    options: undefined,
    optionList: ["valido", "+10"],
  },
  residencia: {
    name: "C. Residencia",
    required: true,
    present: false,
    options: undefined,
    optionList: ["valido", "+60", "terceiros"],
  },
  estadoCivil: {
    name: "Estado civil",
    required: true,
    present: false,
    options: undefined,
    optionList: ["solteiro", "casado", "uniao"],
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
    name: "C. de Estado Civil",
    required: true,
    present: false,
  },
  depId: {
    name: "Identidade Dependente",
    required: false,
    present: false,
    options: undefined,
    optionList: ["semdep", "dep"],
  },
  declaracaoRes: {
    name: "Declaração de Residência",
    required: false,
    present: false,
    options: undefined,
    optionList: ["Não requerido", "Requerido"],
  },
}

interface DocumentosOptionsProps {
  name: string
  required?: boolean
  present?: boolean
  option?: any
  keyName: string
  optionList?: Array<string>
}

import React, { useState, useContext } from "react"
import { List, Typography, Select, Form, Button, Row, Col, Space } from "antd"

const { Option } = Select

interface DocumentosOptionsProps {
  name: string
  keyName: string
  optionList?: string[]
}


const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
}) => {
  const [field, setField] = useState<string>("")
  const globalDocs = useContext(SecondCheckboxContext)

  const handleChange = (value: string) => {
    setField(value)
    console.log(globalDocs);

    const endObject = {
      required:
        keyName === "depId" &&
        optionList &&
        optionList[optionList.indexOf(value)] === "dep"
          ? true
          : documents[keyName].required,
      present: value ? true : false,
      options: optionList ? optionList[optionList.indexOf(value)] : undefined,
    }

    if (!optionList) delete endObject.options

    globalDocs?.setDocs({ ...globalDocs.docs, [keyName]: endObject })
  }

  return (
    <List.Item style={{ padding: 0, margin: 0, borderBlockEnd: "none" }}>
      <Form.Item className="w-full">
        <label className="text-gray-600" htmlFor={field}>
          {name}
        </label>
        <Select value={field} onChange={handleChange}>
          {optionList ? (
            optionList.map((opt) => (
              <Option key={opt} value={opt}>
                {opt}
              </Option>
            ))
          ) : (
            <>
              <Option key="sim" value="sim">
                Sim
              </Option>
              <Option key="nao" value="nao">
                Não
              </Option>
            </>
          )}
        </Select>
      </Form.Item>
    </List.Item>
  )
}

const ComponentThree = () => {
  const docs = useContext(SecondCheckboxContext)?.docs

  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("svg icon")
    console.log(docs)
  }

  return (
    <Row justify="center" style={{ padding: "0.3rem", width: "100%" }}>
      <Col span={8}>
        <Space direction="vertical" size="small" className=" flex w-full">
          <Typography.Title
            level={4}
            style={{ textAlign: "center", marginBottom: 0 }}
          >
            Cadastro
          </Typography.Title>
          <List style={{ width: "100%" }}>
            {Object.keys(documents).map((doc: string) => (
              <DocumentOptions
                key={doc}
                name={documents[doc].name}
                keyName={doc}
                optionList={documents[doc].optionList}
              />
            ))}
          </List>
          <Button type="primary" block onClick={handleClick}>
            Verify
          </Button>
        </Space>
      </Col>
    </Row>
  )
}

export default ComponentThree
