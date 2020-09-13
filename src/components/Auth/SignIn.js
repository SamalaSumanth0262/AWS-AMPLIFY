import { Auth } from 'aws-amplify';
import React from 'react';
import { Formik } from 'formik';
import { TextInput } from '../Formik'
import { Button } from 'antd';
import { CustomNotification } from '../Atoms';
import { ErrorHandler } from '../../utils/ErrorHandler';
import { withRouter } from 'react-router';
import { Typography, notification } from 'antd';

const { Title } = Typography;

const initialValues = {
  email: '',
  code: ''
}


const renderView = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="SignUp" style={{ height: '50vh' }}>
        <Title level={4}>Sign In Your Account</Title>
        <TextInput labelTitle='Email' htmlType='email' isMandatory={true} labelName='email' />
        <TextInput labelTitle='Password' htmlType='password' isMandatory={true} labelName='password' />
        <Button type="primary" htmlType='submit' size='large' style={{ width: '100%' }}>SIGN IN</Button>
        <a href='/signup' danger type="primary" onChange={() => { props.history.push('/signup') }} size='large' style={{ width: '100%' }}>Register Now</a>
      </div>
    </form >
  )
}


const SignIn = (props) => {

  async function handleConfirmSignUp(values) {
    try {
      const user = await Auth.signIn(values.email, values.password);
      console.log("handleConfirmSignUp -> user", user)
      CustomNotification('success', "Login Successful", "Welcome to POC")
      var type = user.attributes['custom:userType']
      props.history.push(type.toString())
      // props.history.push('/founder')
    }
    catch (error) {
      ErrorHandler(error)
    }
  }

  return (
    <Formik initialValues={initialValues} component={renderView} onSubmit={handleConfirmSignUp} />
  )
}

export default withRouter(SignIn);
