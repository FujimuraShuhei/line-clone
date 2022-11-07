import SignIn from '../components/SignIn';
import '../styles/globals.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.js';
import Line from '../components/Line';

function MyApp({ Component, pageProps }) {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Component {...pageProps} />
      {user ? <Line /> : <SignIn />}
    </div>
  );
}

export default MyApp;
