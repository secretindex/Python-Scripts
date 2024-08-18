import { ComplexDocs } from "../../utils/docsInterface"
import { SecondCheckboxContext } from "../../contexts/SecondCheckboxContext"
// import EndText from "../../utils/endTextGen"

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
    optionList: [
      {
        opt: "solteiro",
        present: false
      },
      {
        opt: "casado",
        present: false
      },
      {
        opt: "uniao",
        present: false,
        estadoCivil: false
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

import { useState, useContext } from 'react';
import { Typography, Select, Form, Button, Row, Col, Space } from 'antd';

const { Option } = Select;

interface DocumentosOptionsProps {
  name: string;
  keyName: string;
  optionList?: string[];
}

const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
}) => {
  const globalDocs = useContext(SecondCheckboxContext);
  const [field, setField] = useState<string>("");

  const handleChange = (value: string) => {
    setField(value);

    const endObject = {
      required:
        keyName === "depId" && optionList && optionList[optionList.indexOf(value)] === 'dep'
          ? true
          : documents[keyName].required,
      present: value ? true : false,
      options: optionList ? optionList[optionList.indexOf(value)] : undefined,
    };

    if (!optionList) delete endObject.options;

    globalDocs?.setDocs({
      ...globalDocs.docs,
      [keyName]: endObject,
    });
  };

  console.log(optionList && typeof optionList?.entries !== "object")

  return (
    <Col span={6}>
      <Form.Item className=" w-full m-0">
        <label className=" text-gray-500" >{name}</label>
        <Select
          value={field}
          onChange={handleChange}
        >
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
    </Col>
  );
};

const ComponentThree = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col gap-2 justify-start">
      <Row className="p-2">
        <Col className="w-full">
          <Space direction="vertical" size="middle" className="flex w-full">
            <Typography.Title level={4}>
              Cadastro
            </Typography.Title>
            <Row gutter={[32, 8]}>
              {Object.keys(documents).map((doc: string) => (
                <DocumentOptions
                  key={doc}
                  name={documents[doc].name}
                  keyName={doc}
                  optionList={documents[doc].optionList}
                />
              ))}
            </Row>
          </Space>
        </Col>
      </Row>
      <Button type="primary" className=" w-1/5" onClick={handleClick}>
        Verify
      </Button>
    </div>
  );
};

export default ComponentThree;
