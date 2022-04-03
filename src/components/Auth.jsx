import React, { useState } from 'react'
import Cookies from 'universal-cookie'
import axios from 'axios'

import signinImage from '../assets/signup.jpg'

const initalState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {
    const [form, setForm] = useState(initalState);
    const[isSignup, setIsSignup] = useState(true);

    const handleChange = (e) =>{
        // we have to spread thr form cause we only want to change a specific one
        // and we do it like this...
        setForm({ ...form, [e.target.name]: e.target.value});

    };

    const handleSubmit = (e) =>{
        // stopping page from reloading
        e.preventDefault();
        console.log(form)
    }

    const switchMode = () =>{
        // if you want to change a state due to the prevous state
        setIsSignup((prevIsSignUp)=> !prevIsSignUp);
    };
  return (
    <div className="auth__form-container">
        {/* form */}
        <div className="auth__form-container_fields">
            <div className="auth__form-container_fields-content">
                <p> {isSignup ? 'Sign Up' : 'Sign In'} </p>
                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                name="fullName"
                                type="text"
                                placeholder="Full Name"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    {/* User Name */}
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor="username">Username</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="Username"
                                onChange={handleChange}
                                required
                            />
                    </div>

                    {/* Phone Number */}
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input
                                name="phoneNumber"
                                type="number"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    {/* Avatar URL */}
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="avatarURL">Avatar URL</label>
                            <input
                                name="avatarURL"
                                type="text"
                                placeholder="Avatar URL"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    {/* Password */}
                    <div className="auth__form-container_fields-content_input">
                            <label htmlFor="password">Password</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                onChange={handleChange}
                                required
                            />
                    </div>

                    {/* Condfirm password */}
                    {isSignup && (
                        <div className="auth__form-container_fields-content_input">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                name="confirmPassword"
                                type="password"
                                placeholder="Avatar URL"
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    {/* button */}
                    <div className="auth__form-container_fields-container_button">
                        <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                    </div>
                </form>
                <div className="auth__form-container_fields-account">
                    <p>
                        {isSignup ? "Already have an account" : "Don't have an account"}
                        <span onClick={switchMode}>
                        {isSignup ? "Sign In" : "Sign Up"}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        {/* image */}
        <div className="auth__form-container_image">
            <img src={signinImage} alt="sign in"/>
        </div>
    </div>
  )
}

export default Auth