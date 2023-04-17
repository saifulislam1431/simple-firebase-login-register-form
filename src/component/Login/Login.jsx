import React, { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import logImg from '../../assets/93385-login.json';
import google from '../../assets/icon/google.png';
import facebook from '../../assets/icon/facebook.png';
import twitter from '../../assets/icon/twitter.png';
import github from '../../assets/icon/github.png';
import app from '../../firebase/firebase.init';

import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const auth = getAuth(app);


const Login = () => {
    const [isShow, setIsShow] = useState(false);

    const [type, setType] = useState('password')

    const [getError, setGetError] = useState('');

    const emailRef = useRef();

    const handleTypePass = () => {
        setType('password')
    }
    const handleTypeText = () => {
        setType('text')
    }


    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const registeredUser = res.user;
                // console.log(registeredUser);
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setGetError('')
            })
            .catch(error => {
                setGetError(error.message);
            })
            
        e.target.reset();
    }
    const forgetPassword = () =>{
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth , email)
        .then(()=>{
            toast.success('Password reset email sent!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        })
        .catch((error) => {
            setGetError(error.message);
        })
    }

    const handleGoogleLogIn = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setGetError('');

            })
            .catch(error => {
                console.log(error.message);
                setGetError(error.message);
            })

    }

    const handleGithubLogIn = () => {
        const githubProvider = new GithubAuthProvider();

        signInWithPopup(auth, githubProvider)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setGetError('');

            })
            .catch(error => {
                console.log(error.message);
                setGetError(error.message);
            })
    }

    const handleFacebookLogIn = () => {
        const facebookProvider = new FacebookAuthProvider();

        signInWithPopup(auth, facebookProvider)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setGetError('');

            })
            .catch(error => {
                console.log(error.message);
                setGetError(error.message);
            })
    }

    const handleTwitterLogIn = () => {
        const twitterProvider = new TwitterAuthProvider();

        signInWithPopup(auth, twitterProvider)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                toast.success('Login successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setGetError('');

            })
            .catch(error => {
                console.log(error.message);
                setGetError(error.message);
            })
    }
    return (
        <main>
            <section className='py-10 px-12 flex items-center justify-center min-h-[calc(100vh-50px)]'>


                <div>
                    <h1 className='text-center text-4xl font-bold text-purple-900'>Login Please.</h1>
                    <div className='flex gap-10 items-center justify-center'>
                        <div>
                            <form className='flex flex-col w-full' onSubmit={handleLogIn}>
                                <input type="email" name="email" placeholder="Email" required ref={emailRef} className='my-3 py-3 px-20 bg-purple-200 rounded-lg placeholder:text-slate-700 placeholder:font-medium' />
                                <div className='flex items-center'>
                                    <input type={type} name="password" placeholder="Password" required className='my-3 py-3 px-20 bg-purple-200 rounded-lg placeholder:text-slate-700 placeholder:font-medium' />
                                    <span onClick={() => setIsShow(!isShow)}>

                                        {
                                            isShow ? <EyeIcon className="h-6 w-6 text-blue-500 relative right-9" onClick={handleTypePass} />
                                                : <EyeSlashIcon className="h-6 w-6 text-blue-500 relative right-9" onClick={handleTypeText} />

                                        }

                                    </span>
                                </div>
                                <button type="submit" className='bg-purple-600  py-3 rounded-lg font-medium text-white hover:bg-purple-400 my-3'>Login</button>
                                <p className='text-red-600 font-medium'>{getError}</p>
                                <span className='text-yellow-700 my-3 font-bold underline cursor-pointer' onClick={forgetPassword}>Forgot Password?</span>
                                <p className='font-semibold text-slate-600 mb-3'>Don't have an account? <Link to="/register" className='font-bold underline text-green-700 '>Register</Link></p>
                                <div>
                                    <hr className='border-gray-300 my-2' />
                                    <p className='text-lg font-bold text-purple-400 mb-4 text-center'>Or login with:</p>
                                    <div className='flex items-center justify-evenly mt-6'>
                                        <button onClick={handleGoogleLogIn}><img src={google} alt="" /></button>
                                        <button onClick={handleFacebookLogIn}><img src={facebook} alt="" /></button>
                                        <button onClick={handleTwitterLogIn}><img src={twitter} alt="" /></button>
                                        <button onClick={handleGithubLogIn}><img src={github} alt="" /></button>
                                    </div>
                                </div>
                            </form>

                        </div>
                        <div className='w-1/2'>
                            <Lottie animationData={logImg} loop={true} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Login;