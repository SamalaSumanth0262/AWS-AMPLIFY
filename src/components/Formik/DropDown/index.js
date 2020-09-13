import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { Select, Typography } from 'antd';
import renderHtml from 'react-render-html';
const { Option } = Select;
const { Text } = Typography
const CustomDropDown = (props) => {
  let {
    form: { setFieldValue, setFieldTouched },
    field: { name, value },
    placeholder,
    options
  } = props;
  const handleChange = (value, props) => {
    setFieldTouched(name);
    setFieldValue(name, value);
    if (typeof (props.onChange) === 'function') {
      props.onChange(value)
    }
  }
  return (
    <div>
      <Select
        onChange={(value) => (handleChange(value, props))}
        placeholder={placeholder}
        style={{ width: '100%', marginTop: '5px' }}
        size='large'
      >
        {options.map((option, index) => (<Option value={option.value} disabled={option.disabled}>{option.label}</Option>))}
      </Select>

    </div>
  );
};

const DropDown = (props) => {
  const { labelFor, labelTitle, isMandatory, disabled, labelName, placeholder, option } = props;
  return (
    <div  {...props} >
      <label htmlFor={labelFor}>
        <Text strong >{renderHtml(labelTitle)} {isMandatory ? <span className="text-mandatory">*</span> : ''}</Text>
      </label>
      <Field
        disabled={disabled}
        name={labelName}
        component={CustomDropDown}
        option={option}
        placeholder={placeholder}
        {...props}
      />
      <div className='error-text'>
        <ErrorMessage name={labelName} />
      </div>
    </div>
  );
};

DropDown.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  labelFor: PropTypes.string.isRequired,
  defaultValue: PropTypes.array
};

export default DropDown;