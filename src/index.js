import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import stor from './reducers/index';
import reportWebVitals from './reportWebVitals';

// Import your components
import LogInAndSignup from './components/LogInAndSignUp/logInAndSignUp';
import HomePage from './components/HomePage/HomeTap/HomePage';
import Messages from './components/HomePage/MessageTap/Message';
import Profile from './components/HomePage/Profile/Profile';
import SignUpWithGoogle from './components/signUpWithGoogle/signUpWithGoogle';
import ReceivedMessages from './components/HomePage/MessageTap/ReceivedMessg';

// Import your stylesheets
import './components/design/design.css';
import './bootstrap/css/bootstrap.css';

const store = createStore(stor);

const App = () => {
    return (
        <React.StrictMode>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <Provider store={store}>
                {/* Google OAuth Provider */}
                <GoogleOAuthProvider clientId="490963279159-t44uc8pfb3mg77gkl0pq6fj93bqbosik.apps.googleusercontent.com">
                    <Router>
                        <Routes>
                            {/* Define your routes */}
                            <Route exact path="/" element={<Navigate replace to="/LogInAndSignUp" />} />
                            <Route path="/LogInAndSignUp" element={<LogInAndSignup />} />
                            <Route path="/Home" element={<HomePage />} />
                            <Route path="/SendMessages" element={<Messages />} />
                            <Route path="/ReceivedMessages" element={<ReceivedMessages />} />
                            <Route path="/Profile" element={<Profile />} />
                            <Route path="/Google" element={<SignUpWithGoogle />} />
                        </Routes>
                    </Router>
                </GoogleOAuthProvider>
            </Provider>
        </React.StrictMode>
    );
};

// Render the application
ReactDOM.render(<App />, document.getElementById('root'));

// Performance measurement
reportWebVitals();
