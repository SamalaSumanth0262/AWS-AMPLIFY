import React, { useState } from 'react';
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import { Typography, Input } from 'antd'
import renderHtml from "react-render-html";
import moment from 'moment';
import { TimePicker } from 'antd';
const { Text } = Typography;


const CustomTimePicker = (props) => {
  const handleChange = (moment, selectedValue) => {
    var { form: { setFieldTouched, setFieldValue }, labelName } = props
    setFieldTouched(labelName)
    setFieldValue(labelName, selectedValue)
  }
  return (
    <div>
      <TimePicker
        onChange={handleChange}
        name={props.labelName}
        style={{ width: '100%' }}
        size='large'
        format={"HH:mm"}
      />
    </div>
  )
}


const FormikTimePicker = props => {
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
          component={CustomTimePicker}
          validate={props.validate}
          {...props}
        />
      </label>
      <div className='error-text'>
        <ErrorMessage name={props.labelName} />
      </div>
    </div>
  );
};

FormikTimePicker.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired
};

export default FormikTimePicker