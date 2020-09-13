import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const SignOut = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
      <div style={{ width: '30%' }}>
        <AmplifySignOut />
      </div>
    </div>
  )
}

export default SignOut