import activesDocument from "./objects/ActivesObj"
import { SecondCheckboxContext } from "../../contexts/SecondCheckboxContext"
import { OptionInt } from "./SubComponents/NestedSelect"

type OptList = Array<string | OptionInt | undefined>

interface DocumentosOptionsProps {
  name: string
  required?: boolean
  present?: boolean
  option?: any
  keyName: string
  optionList?: OptList
}

import { useState, useContext, FC } from 'react';
import { Typography, Select, Form, Button, Row, Col, Space } from 'antd';
import NestedSelect from "./SubComponents/NestedSelect"

const { Option } = Select;

interface DocumentosOptionsProps {
  name: string;
  keyName: string;
  optionList?: OptList;
}

// interface SelectComponentProps {
//   optionList: OptList | undefined
// }

const SelectComponent: FC<DocumentosOptionsProps> = ({ name, keyName, optionList }) => {
  const globalDocs = useContext(SecondCheckboxContext);
  const [field, setField] = useState<string>("");

  const handleChange = (value: string) => {
    setField(value);

    console.log(optionList ? optionList : "marmota");

    const endObject = {
      required:
        keyName === "depId" && optionList && optionList[optionList.indexOf(value)] === 'dep'
          ? true
          : activesDocument[keyName].required,
      present: value ? true : false,
      options: optionList ? optionList[optionList.indexOf(value)] : undefined,
    };

    if (!optionList) delete endObject.options;

    globalDocs?.setDocs({
      ...globalDocs.docs,
      [keyName]: endObject,
    });
  };

  // Default
  if (!optionList) {
    return (
      <Select
        value={field}
        onChange={handleChange}
      >
        <Option key="sim" value="sim">
          Sim
        </Option>
        <Option key="nao" value="nao">
          Não
        </Option>
      </Select>
    )
  }

  if (optionList.every(e => typeof e !== "object")) {
    console.log(optionList)
    return (
      <Select
        value={field}
        onChange={handleChange}
      >
        {optionList.map((opt) => (
          <Option key={opt as string} value={opt}>
            {opt as string}
          </Option>
        ))}
      </Select>
    )
  } else if (optionList.every(e => typeof e === "object")) {
    return (
      <NestedSelect optionList={optionList} />
    )
  }
}

const DocumentOptions: React.FC<DocumentosOptionsProps> = ({
  name,
  keyName,
  optionList,
}) => {
  return (
    <Col span={6}>
      <Form.Item className=" w-full m-0">
        <label className=" text-gray-500" >{name}</label>
        <SelectComponent optionList={optionList} name={name} keyName={keyName} />
      </Form.Item>
    </Col>
  );
};

const ComponentThree = () => {
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("marmota");
  };

  return (
    <div className="flex flex-col gap-2 p-10 justify-center items-center">
      <Row className="p-2 justify-center">
        <Col span={12}>
          <Space direction="vertical" size="middle" className="flex w-full">
            <Typography.Title className="text-7xl font-extrabold" level={4}>
              CADASTRO
            </Typography.Title>
            <Row gutter={[16, 8]}>
              {Object.keys(activesDocument).map((doc: string) => (
                <DocumentOptions
                  key={doc}
                  name={activesDocument[doc].name}
                  keyName={doc}
                  optionList={activesDocument[doc].optionList}
                />
              ))}
            </Row>
            <Button type="primary" block onClick={handleClick}>
              Verify
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default ComponentThree;
