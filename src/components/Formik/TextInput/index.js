import React, { useState } from 'react';
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { Typography, Input } from 'antd'
import renderHtml from "react-render-html";
const { Text } = Typography;


const customInputComponent = (props) => {
  const handleChange = (e, props) => {
    var { value } = e.currentTarget;
    var { form: { setFieldTouched, setFieldValue }, labelName } = props
    setFieldTouched(labelName)
    setFieldValue(labelName, value)
  }
  return (
    //TO_DO: get margionTOp from config
    <Input size="large" placeholder={props.placeholder} htmlType={props.type} style={{ marginTop: '5px' }} onChange={(e) => { handleChange(e, props) }} />
  )
}
const TextInput = props => {
  return (
    <div style={{ width: "100%" }} {...props}>
      <label>
        <Text strong>
          {renderHtml(props.labelTitle)}
          {props.isMandatory ? (
            <span className='text-mandatory'>&nbsp;*</span>
          ) : (
              ""
            )}
        </Text>
        <Field
          disabled={props.disabled}
          type={props.type ? props.type : "text"}
          name={props.labelName}
          validate={props.validate}
          {...props}
          component={customInputComponent}
        />
      </label>
      <div className='error-text'>
        <ErrorMessage name={props.labelName} />
      </div>
    </div>
  );
};

TextInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired
};

export default TextInput