import { GoogleLogin } from '@leecheuk/react-google-login';

function App() {
  return (
    <GoogleLogin
      clientId="529979054654-o6s2hatkivk24mb9otuvg2m2431hn8dk.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={response => console.log(response)}
      onFailure={response => console.error(response)}
    />
  );
}

export default App;
