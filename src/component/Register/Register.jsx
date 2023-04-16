import React, { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Register = () => {
    const [isShow , setIsShow] = useState(false);

    const [type ,setType] = useState('password')

    const [getError , setGetError] = useState('');

    const handleTypePass =()=>{
        setType('password')
    }
    const handleTypeText =()=>{
        setType('text')
    }

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;

        const username = form.username.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(username , email, password);
        if(!/(?=.*?[A-Z])/.test(password)){
            setGetError('At least must have one upper case character in your password');
            return;
        }
        else if(!/(?=.*?[0-9])/.test(password)){
            setGetError('At least must have one digit in your password');
            return;
        }
        else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
            setGetError('At least must have one special character in your password');
            return;
        }
        else if(password.length < 8){
            setGetError('Your password must have minimum eight in length');
            return;
        }

        createUserWithEmailAndPassword(auth ,email ,password)
        .then(res=>{
            const registeredUser = res.user;
            console.log(registeredUser);
            toast.success('You successfully registered in this site!', {
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
        .catch(error=>{
            setGetError(error.message);
        })

        e.target.reset();

    }
    return (
        <main>
            <section className='py-10 px-12 flex items-center justify-center min-h-[calc(100vh-50px)]'>


                <div>
                    <h1 className='text-center text-4xl font-bold text-purple-900 my-10'>Register your account Please.</h1>
                    <div className='flex gap-10 items-center justify-center'>
                        <div>
                            <form className='flex flex-col w-full' onSubmit={handleRegister}>
                                <input type="text" name="username" placeholder="Username" required className='my-3 py-3 px-20 bg-purple-200 rounded-lg placeholder:text-slate-700 placeholder:font-medium' />
                                <input type="email" name="email" placeholder="Email" required className='my-3 py-3 px-20 bg-purple-200 rounded-lg placeholder:text-slate-700 placeholder:font-medium' />
                                <div className='flex items-center'>
                                    <input type={type} name="password" placeholder="Password" required className='my-3 py-3 px-20 bg-purple-200 rounded-lg placeholder:text-slate-700 placeholder:font-medium' />
                                    <button onClick={() => setIsShow(!isShow)}>

                                        {
                                            isShow ? <EyeIcon className="h-6 w-6 text-blue-500 relative right-9" onClick={handleTypePass} />
                                                : <EyeSlashIcon className="h-6 w-6 text-blue-500 relative right-9" onClick={handleTypeText} />

                                        }

                                    </button>
                                </div>
                                <button type="submit" className='bg-purple-600  py-3 rounded-lg font-medium text-white hover:bg-purple-400 my-3'>Register</button>
                                <p className='text-red-600 font-medium my-4'>{getError}</p>
                               
                                <p className='font-semibold text-slate-600 mb-3'>Already have an account? <Link to="/login" className='font-bold underline text-green-700 '>Login</Link></p>
                                
                            </form>

                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
};

export default Register;