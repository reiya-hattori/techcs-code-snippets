import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="529979054654-o6s2hatkivk24mb9otuvg2m2431hn8dk.apps.googleusercontent.com">
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();