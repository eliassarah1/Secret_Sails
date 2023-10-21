// Bring in the GoogleLogin
// component from the library
import { GoogleLogin } from '@react-oauth/google';
import jwt from 'jwt-decode'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useBetween } from 'use-between';
import './signUpWithGoogle.css'

const SignUpWithGoogle = () => {
    const state = useSelector((state) => state.data);
    const { userInfo, setUserInfo, seteditProfileData, } = useBetween(state.useShareState);
    const navigate = useNavigate();



    return (
        <div className="">
            <h4>Please select an account</h4>
            <GoogleLogin
                onSuccess={credentialResponse => {

                    var user = jwt(credentialResponse.credential);
                //   take the user data from google account
                
                    setUserInfo((lastValue) => {
                        return {
                            ...lastValue,
                            email: user.email,
                            src: user.picture,
                            userName: user.name


                        }

                    });
                    seteditProfileData((lastValue) => {
                        return {

                            src: user.picture,

                        }

                    });
                    navigate('/Home', { replace: false });

                }}

                onError={() => {
                    console.log('Login Failed');
                }}

            />
        </div>
    );
}
export default SignUpWithGoogle