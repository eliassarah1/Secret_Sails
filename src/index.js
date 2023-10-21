import React, { Profiler } from 'react';
import ReactDOM from 'react-dom/client';
import LogInAndSignup from './components/LogInAndSignUp/logInAndSignUp';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from "react-router-dom";
import { Provider } from 'react-redux';
import stor from './reducers/index';
import { createStore } from 'redux';
import './components/design/design.css'
import HomePage from './components/HomePage/HomeTap/HomePage';
import Messages from './components/HomePage/MessageTap/Message';
import './bootstrap/css/bootstrap.css'
import Profile from './components/HomePage/Profile/Profile';
import { GoogleOAuthProvider } from '@react-oauth/google'
import SignUpWithGoogle from './components/signUpWithGoogle/signUpWithGoogle';
import ReceivedMessages from './components/HomePage/MessageTap/ReceivedMessg';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(stor);
root.render(
  <React.StrictMode>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <Provider store={store}>
      
      {/* need it to log in from google */}
      <GoogleOAuthProvider clientId="490963279159-t44uc8pfb3mg77gkl0pq6fj93bqbosik.apps.googleusercontent.com">
      
        <Router>
          <Routes>
            <Route exact path="/" element={<Navigate replace to={'/LogInAndSignUp'} />} />
            <Route exact path='/LogInAndSignUp' element={<LogInAndSignup />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/SendMessages" element={<Messages />} />
            <Route path="/ReceivedMessages" element={< ReceivedMessages />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path='/Google' element={<SignUpWithGoogle />}></Route>

          </Routes>
          {/* <LogInAndSignup /> */}

        </Router>
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
