import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';

export interface OptionInt {
  label: string;
  value: string | number | undefined;
  children?: OptionInt[];
}

const onChange: CascaderProps<OptionInt>['onChange'] = (value) => {
  console.log(value[value.length - 1])
  console.log(value);
};

interface NestedSelectProps {
  optionList: OptionInt[]
}

const NestedSelect: React.FC<NestedSelectProps> = ({ optionList }) => {
  const options: OptionInt[] = optionList


  return (<Cascader options={options} onChange={onChange} placeholder="Please select" />)
};

export default NestedSelect;