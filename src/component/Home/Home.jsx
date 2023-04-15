import React from 'react';
import {Link} from 'react-router-dom';
import Lottie from 'lottie-react';
import heroImg from '../../assets/41111-man-filling-a-survey-with-a-woman-watching-at-5-star-feedback-dialog.json'

const Home = () => {
    return (
        <main>
            <section className='py-10 px-12 flex items-center justify-center min-h-[calc(100vh-50px)]'>

                <div className='flex items-center justify-center'>
                    <div>
                        <h1 className='text-2xl font-extrabold my-5 text-purple-700'>A man’s feet should be planted in his country, but his eyes should survey the world</h1>

                        <p className='text-slate-700 font-medium mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, minima. Assumenda error debitis explicabo officia? Fugiat, deleniti quibusdam! Velit, fugit sed expedita, animi provident totam maiores eveniet neque pariatur at nam aut!</p>

                        <Link to="/login">
                        <button className='bg-purple-600 px-14 py-3 rounded-lg font-medium text-white hover:bg-purple-400'>Get Started</button>
                        </Link>
                    </div>

                    <div>
                        <Lottie animationData={heroImg} loop={true}/>
                    </div>
                </div>

            </section>
        </main>
    );
};

export default Home;