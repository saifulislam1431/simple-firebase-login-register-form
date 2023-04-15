import React from 'react';
import{NavLink} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex items-center justify-between py-3 px-12'>
            <div>
                <h1 className='font-extrabold text-3xl text-slate-500'>The survey</h1>
            </div>
            <ul className='flex'>
                <li className='ml-8 font-semibold'>
                    <NavLink to="/" className={({isActive})=> (isActive ? 'active' : 'default') }>Home</NavLink>
                    
                </li>
                <li className='ml-8 font-semibold'>
                <NavLink to="/login" className={({isActive})=> (isActive ? 'active' : 'default') }>Login/Register</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;