import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate()
    const [error, seterror] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit, formState } = useForm()
    const { errors } = formState;

    const create = async (data) => {
        seterror("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            errorNotify("Sign-up Failed");
            seterror(error.message)
        }
    }

    function errorNotify(err) {
        toast.error(err, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Full Name can not be empty'
                                }
                            })}
                        />
                        {errors.name?.message && <p className="text-red-600 mt-8 text-center">{errors.name.message}</p>}
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email can not be empty'
                                },
                                pattern: {
                                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Email should be valid'
                                }
                            })}
                        />
                        {errors.email?.message && <p className="text-red-600 mt-8 text-center">{errors.email.message}</p>}
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password can not be empty'
                                },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                    message: 'Password must - at least 8 characters, 1 uppercase letter, 1 lowercase letter and 1 number'
                                },
                            })}
                        />
                        {errors.password?.message && <p className="text-red-600 mt-8 text-center">{errors.password.message}</p>}
                        <Button type="submit" className="w-full">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
