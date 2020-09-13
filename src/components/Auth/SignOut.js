import { Auth } from 'aws-amplify';
import { withRouter } from 'react-router-dom';
const SignOut = async (props) => {
  try {
    await Auth.signOut({ global: true });
    props.history.push('/signin')
  } catch (error) {
    console.log('error signing out: ', error);
  }
}


export default withRouter(SignOut);
