import { Auth } from 'aws-amplify';
import React from 'react';
import { Formik } from 'formik';
import { TextInput, DropDown } from './Formik'
import { Button } from 'antd';
import { CustomNotification } from '../components/Atoms';
import { ErrorHandler } from '../utils/ErrorHandler';
import { withRouter } from 'react-router';
import Amplify from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);
const initialValues = {
  user_name: '',
  email: '',
  password: '',
  phone_number: '',
  user_type: ''
}


const renderView = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="SignUp">

        <TextInput labelTitle='Email' htmlType='email' isMandatory={true} labelName='email' />

        <TextInput labelTitle='Password' htmlType='password' isMandatory={true} labelName='password' />

        <TextInput htmlType='tel' labelTitle='Phone Number' isMandatory={true} labelName='phone_number' />

        <DropDown labelTitle='Want to become' options={[
          {
            label: 'Founder',
            value: 'founder'
          }, {
            label: 'Investor',
            value: 'investor'
          }]
        } labelName='user_type' style={{ width: '100%' }} isMandatory={true} />
        <Button type="primary" htmlType='submit' size='large' style={{ width: '100%' }}>CREATE ACCOUNT</Button>
      </div>
    </form >
  )
}



const CustomAuth = (props) => {
  async function signUp(values) {
    try {
      const { user } = await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email,
          phone_number: values.phone_number,
          'custom:userType': values.user_type
        }
      });
      console.log(user);
      if (user) {
        CustomNotification('success', "Verify OTP", "OTP has been sent your email...")
        props.history.push('/verify')
      }
    } catch (error) {
      ErrorHandler(error)
    }
  }

  return (
    <Formik initialValues={initialValues} component={renderView} onSubmit={signUp} />
  )
}

export default withRouter(CustomAuth);
