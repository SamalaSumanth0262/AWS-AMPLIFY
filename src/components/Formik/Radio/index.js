import React, { useState } from 'react';
import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import renderHtml from "react-render-html";
import { Typography } from 'antd';
import { Radio } from 'antd';

const { Text } = Typography;
const RadioBox = (props) => {
  const [radioValue, setRadioValue] = useState(null)
  const { labelFor, labelTitle, isMandatory, disabled, labelName, options } = props;
  const customRadioBox = (props) => {
    const { options } = props;

    let handleRadio = (e, props) => {
      const { form: { setFieldValue } } = props
      var { value } = e.target
      setFieldValue(labelName, value)
      setRadioValue(value)
    }

    return (
      <Radio.Group
        name={labelName}
        defaultValue={1}
        size="large"
        style={{ marginTop: '5px' }}
        onChange={(e) => handleRadio(e, props)}
      >
        {options.map((option) => {
          return (
            <Radio value={option.value} name={option.labelTitle} checked={radioValue === option.value}>
              <Text strong>{option.labelTitle}</Text>
            </Radio>
          )
        }
        )}
      </Radio.Group >
    )
  }


  return (
    <div {...props}>
      <label for={labelFor}>
        <Text strong >{renderHtml(labelTitle)} {isMandatory ? <span className="text-mandatory">*</span> : ''}</Text>
        <br />
        <label className="inline">
          <Field
            disabled={disabled}
            type={"radio"}
            className=''
            name={labelName}
            validate={true}
            component={customRadioBox}
            {...props}

          />
        </label>
      </label>
      <div className='error-text'>
        <ErrorMessage name={props.labelName} />
      </div>
    </div>
  )
}

RadioBox.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelTitle: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.bool
  })),
  width: PropTypes.string.isRequired
}

export default RadioBox;