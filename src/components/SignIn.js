import { Button } from '@mui/material';
import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase.js';

const SignIn = () => {
  function signInWithGoogle() {
    // Googleに入れるようになる。
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </div>
  );
};

export default SignIn;
