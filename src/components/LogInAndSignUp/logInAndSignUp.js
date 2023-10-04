import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useBetween } from "use-between";
import SendMessage from "../sendMessageText/sendMessage";
import axios from 'axios'
import CryptoJS from "crypto-js";
import './logInAndSignUp.css';
import { ControlBar, Player } from 'video-react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Video from '../../photo/Inbox.mp4'
import SignUpWithGoogle from "../signUpWithGoogle/signUpWithGoogle";



const LogInAndSignup = (props) => {


    const state = useSelector((state) => state.data);
    const { setUserInfo, sethidHomeIntro } = useBetween(state.useShareState);

    const [login, setlogin] = useState(true);
    const [Conflogin, setConflogin] = useState(true);

    const [LoginInputText, setLoginInputText] = useState({
        UserName: "",
        Password: "",

    });

    const [SignUpInputText, setSignUpInputText] = useState({
        UserName: "",
        Email: "",
        Password: "",
        ConfirmPassword: ""
    });

    const [Error, setError] = useState({
        error: "*Please enter all fields correctly", anyError: false,

    });


    useEffect(() => {
        //   ------------<get the country>-------------------
        const getCountryData = async () => {
            await axios.get('https://ipapi.co/json/').then((response) => {
                let data = response.data;

                setUserInfo((lastValue) => {
                    return {
                        ...lastValue,
                        country: data.country_name,

                    }

                })


            }).catch((error) => {
                console.log(error);
            });
        }
        getCountryData()
        sethidHomeIntro(false)

        //    ------------</get the country>-------------------

    }, [Conflogin, LoginInputText.Password])
 
    const [googleBtn, setGoogleBtn] = useState(false);


    const handleSignWithGoogle = () => {

        setGoogleBtn(false);

    }


    const [PasswordEye, setPasswordEye] = useState(true);
    const [password, setPassword] = useState("password");

    const Eye = () => {
        if (password == "password") {
            setPassword("text");
            setPasswordEye(false);

        }
        else {
            setPassword("password");
            setPasswordEye(true);

        }
    }


    const [ConfirmPasswordEye, setConfirmPasswordEye] = useState(true);
    const [ConfirmPassword, setConfirmPassword] = useState("password");

    const Eye1 = () => {
        if (ConfirmPassword == "password") {
            setConfirmPassword("text");
            setConfirmPasswordEye(false);

        }
        else {
            setConfirmPassword("password");
            setConfirmPasswordEye(true);

        }
    }


    const goToSignUp = () => {
        errorHandel("anyError", false)
        setPassword("password");
        setPasswordEye(true);
        setLoginInputText((lastValue) => {
            return {
                ...lastValue,
                UserName: "",
                Password: ""

            }
        });
        setlogin(false);

    }

    const goToLogIn = () => {
        errorHandel("anyError", false);
        setPassword("password");
        setPasswordEye(true);
        setSignUpInputText((lastValue) => {
            return {
                ...lastValue,
                UserName: "",
                Email: "",
                Password: "",
                ConfirmPassword: ""
            }
        });
        setlogin(true)

    }

    const inputLogInEvent = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        errorHandel("anyError", false)

        setLoginInputText((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }
    const inputSignUpEvent = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        errorHandel("anyError", false)

        setSignUpInputText((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        });

    }
    const errorHandel = (name, value) => {

        setError((lastValue) => {
            return {
                ...lastValue,
                [name]: value
            }
        })
    }
    const navigate = useNavigate();

    const confirmLogIn = (e) => {

        e.preventDefault();

        if (LoginInputText.UserName == "" || LoginInputText.UserName != "Elias"
            || LoginInputText.Password == "" || LoginInputText.Password != "12345")
            errorHandel("anyError", true)

        else {
            setUserInfo((lastValue) => {
                return {
                    ...lastValue,
                    password: LoginInputText.Password,
                    userName: LoginInputText.UserName
                }

            })
            const text = "undefined";
            errorHandel("anyError", false)
            setConflogin(!Conflogin);
            const encryptedPassword = CryptoJS.AES.encrypt(
                LoginInputText.Password,
                text

            ).toString();


            const bytes = CryptoJS.AES.decrypt(encryptedPassword, text);
            const data = bytes.toString(CryptoJS.enc.Utf8);
            // alert(data)



            navigate('/Home', { replace: false });

        }


    }
    const confirmSignUp = (e) => {
        e.preventDefault();
        if (SignUpInputText.UserName == "" || SignUpInputText.Password == ""
            || SignUpInputText.Password != SignUpInputText.ConfirmPassword || SignUpInputText.Email == ""
            || !SignUpInputText.Email.includes('@'))
            errorHandel("anyError", true)
        else {
            goToLogIn()
        }

    }

    return (

        <div className="FisrtPage">


            <Player autoPlay  loop aspectRatio="100:1" src={Video} className="Video">
                <ControlBar autoHide={false} />
            </Player>

            <div className="Form" style={{ zIndex: 1 }}>


                <div className="LogInform">

                    {/* -----------------------------------<LOGIN>------------------------------------------- */}
                    {login &&
                        <div className="LogIn" >
                            <div className="header">
                                <h1>Log In</h1>
                                <p>Please enter your registered information</p>
                            </div>

                            <form>
                                {Error.anyError == true &&
                                    <div className="error">{Error.error}</div>
                                }

                                <div className="input">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <input type="text"
                                        placeholder="Username"
                                        name="UserName"
                                        value={LoginInputText.UserName}
                                        onChange={inputLogInEvent} />


                                </div>

                                <div className="input">
                                    <i className="fa fa-lock"
                                        aria-hidden="true"></i>
                                    <input type={password}
                                        placeholder="Password"
                                        name="Password"
                                        value={LoginInputText.Password}
                                        onChange={inputLogInEvent} />
                                    <i onClick={Eye} className={`fa ${PasswordEye ? "fa-eye-slash" : "fa-eye"}`} ></i>

                                </div>
                                <input className="signup-btn" type="submit" value="LOG IN" onClick={confirmLogIn} />

                            </form>

                            <p>Don't have an account? <a onClick={() => goToSignUp()} style={{ color: ' #0074b3' }}>Sign up</a></p>
                            <div className="or">OR</div>

                            <div className="signup-btn google">
                                <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"></img>
                                <div onClick={() => setGoogleBtn(true)}>Log in with Google</div>
                            </div>
                            <Modal show={googleBtn} onHide={handleSignWithGoogle} size='lg' className="modle"  >

                                <Modal.Body ><SignUpWithGoogle /> </Modal.Body>
                                <Modal.Footer dir="auto" >

                                    <Button className="btn btn-calendar-modal-cancel" style={{ background: "#888", border: "none" }}
                                        onClick={handleSignWithGoogle}>
                                        Close
                                    </Button>

                                </Modal.Footer>

                            </Modal>


                        </div>

                    }

                    {/* ---------------------------</LOGIN>---------------------------- */}


                    {/* -----------------------------<SIGNUP>--------------------------- */}
                    {!login &&
                        <div className="SignUp">
                            <div className="header">
                                <h1>Creat a New Account</h1>

                            </div>
                            {Error.anyError == true &&
                                <div className="error">{Error.error}</div>
                            }

                            <form>
                                <div className="input">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                    <input type="text"
                                        placeholder="Username"
                                        name="UserName"
                                        value={SignUpInputText.UserName}
                                        onChange={inputSignUpEvent}
                                    />

                                </div>
                                <div className="input">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <input type="email"
                                        placeholder="Email"
                                        name="Email"
                                        value={SignUpInputText.Email}
                                        onChange={inputSignUpEvent} />

                                </div>
                                <div className="input">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <input type={password}
                                        placeholder="Password"
                                        name="Password"
                                        value={SignUpInputText.Password}
                                        onChange={inputSignUpEvent} />
                                    <i onClick={Eye} className={`fa ${PasswordEye ? "fa-eye-slash" : "fa-eye"}`} ></i>

                                </div>
                                <div className="input">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <input type={ConfirmPassword}
                                        placeholder="Confirm Password"
                                        name="ConfirmPassword"
                                        value={SignUpInputText.ConfirmPassword}
                                        onChange={inputSignUpEvent} />
                                    <i onClick={Eye1} className={`fa ${ConfirmPasswordEye ? "fa-eye-slash" : "fa-eye"}`} ></i>

                                </div>
                                <input className="signup-btn" type="submit" value="SIGN UP" onClick={confirmSignUp} />


                            </form>

                            <p>Already have an account ? <a onClick={() => goToLogIn()} style={{ color: ' #0074b3' }}>Log in</a></p>
                        </div>
                    }

                    {/* -----------------------</signup>------------------------------ */}


                </div>

            </div>
            <div className="SendMessage" style={{ zIndex: 1 }}>
                <SendMessage />
            </div>


        </div>


    );
}

export default LogInAndSignup;