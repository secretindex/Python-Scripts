// import List from "@mui/material/List"
// import ListItem from "@mui/material/ListItem"
// import Avatar from "@mui/material/Avatar"
// import {
//   Box,
//   Typography,
//   Select,
//   SelectChangeEvent,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Button,
// } from "@mui/material"

import { List, Avatar, Typography, Select, Form, Button, Row, Col } from "antd"

const { Option } = Select

// import { Select } from "antd";

import { ComplexDocs } from "../../utils/docsInterface"
import React, { BaseSyntheticEvent, useContext, useState } from "react"
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

const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
}) => {
  const globalDocs = useContext(SecondCheckboxContext)
  const [field, setField] = useState<string>("")

  const handleChange = (e: SelectChangeEvent) => {
    const nameVal = e.target

    setField(e.target.value)

    console.log(keyName)

    // Error any type
    const endObject = {
      required:
        nameVal.name === "depId" &&
        optionList![optionList!.indexOf(e.target.value)] === "dep"
          ? true
          : documents[nameVal.name].required,
      present: e.target.value ? true : false,
      options: optionList
        ? optionList[optionList.indexOf(e.target.value)]
        : undefined,
    }

    if (!optionList) delete endObject.options

    globalDocs?.setDocs({
      ...globalDocs.docs,
      [nameVal.name]: endObject,
    })

    console.log(globalDocs!.docs)
  }

  const handleSubmit = () => {
    const endTextTwo = new EndText(globalDocs?.docs)
    console.log(endTextTwo.returnFullText())
  }

  return (
    <List.Item style={{ width: "100%" }}>
      <Form.Item label={name} style={{ width: "100%" }}>
        <Select value={field} onChange={handleChange} style={{ width: "100%" }}>
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

const ComponentTwo = () => {
  const handleClick = (e: BaseSyntheticEvent) => {
    console.log(e)
  }

  return (
    <Row
      justify="center"
      align="middle"
      style={{ padding: "0.3rem", width: "100%" }}
    >
      <Col span={12}>
        <Row justify="center" align="middle" style={{ marginBottom: "1rem" }}>
          <Avatar>H</Avatar>
          <Typography style={{ fontSize: "1.2rem", marginLeft: "0.7rem" }}>
            Cadastro
          </Typography>
        </Row>
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
      </Col>
    </Row>
  )
}

export default ComponentTwo
