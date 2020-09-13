import { Auth } from 'aws-amplify';
import React from 'react';
import { Formik } from 'formik';
import { TextInput } from '../Formik'
import { Button } from 'antd';
import { CustomNotification } from '../Atoms';
import { ErrorHandler } from '../../utils/ErrorHandler';
import { withRouter } from 'react-router';
import { Typography } from 'antd';

const { Title } = Typography;

const initialValues = {
  email: '',
  code: ''
}


const renderView = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="SignUp" style={{ height: '50vh' }}>
        <Title level={4}>Activate Your Account</Title>
        <TextInput labelTitle='Email' htmlType='email' isMandatory={true} labelName='email' />

        <TextInput labelTitle='Code' htmlType='password' isMandatory={true} labelName='code' />

        <Button type="primary" htmlType='submit' size='large' style={{ width: '100%' }}>Verify</Button>
      </div>
    </form >
  )
}


const VerifyAuth = (props) => {

  async function handleConfirmSignUp(values) {
    try {
      await Auth.confirmSignUp(values.email, values.code);
      CustomNotification('success', "Accout has been Verified", "Please Sign in")
      props.history.push('/signin')
    }
    catch (error) {
      ErrorHandler(error)
    }
  }

  return (
    <Formik initialValues={initialValues} component={renderView} onSubmit={handleConfirmSignUp} />
  )
}

export default withRouter(VerifyAuth);
