'use client'
import React, { useEffect, useState } from 'react'
import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import axios from 'axios'
import Spinner from './Spinner/Spinner'
import { useRouter, useSearchParams } from 'next/navigation'

const PaymentForm = () => {

    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams(); //contains cost of rent


    // Form Data States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [showErrorMsg, setShowErrorMsg] = useState(false)

    useEffect(() => {
        console.log("Token state after update:", token);
    }, [token]);

    useEffect(() => {
        setAmount(searchParams.get('cost'));
    }, [])


    const generateToken = async () => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';
            setIsLoading(true)
            const response = await axios.get(`${apiUrl}/api/generate-token`)
            // console.log(response.data);

            setToken(response.data.res.access_token);
        } catch (error) {
            console.log("ERROR -> ", error);
        }
        finally {
            setIsLoading(false);
        }

    }

    const handleSubmit = async (e) => {
        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/';
            e.preventDefault();

            if (number.length !== 10) {
                setShowErrorMsg(true);
                return;
            }

            const formData = { name, email, number, amount };

            console.log("TOKEN = ", token);

            const response = await axios.post(`${apiUrl}/api/payment-request`, { formData, accessToken: token })

            console.log(response);

            // Convert URL object to string before passing to router.push
            router.push(response.data.redirectURL);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='w-full p-4'>

            <div className='bg-green-200 p-3 text-center w-full md:w-1/2 mx-auto rounded-md my-4 '>
                {token != '' ?
                    <h1 className='text-base md:text-lg w-fit mx-auto p-2 '>Token Generated!</h1>
                    :
                    <h1 className='text-base md:text-lg p-2 '>First generate token and then Pay.</h1>
                }
            </div>

            <div className="w-full md:w-1/4 mx-auto shadow-md bg-slate-300 rounded-md p-8">
                <form action="" onSubmit={handleSubmit}>
                    <Field>
                        <Label className="text-sm/6 font-medium text-black">Name</Label>
                        <Input required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={clsx(
                                'mb-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-black">Email</Label>
                        <Input required type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={clsx(
                                'mb-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-black">Phone Number</Label>


                        <p className={`font-light text-sm ${showErrorMsg ? "text-red-500 font-semibold" : ""}`}>The Number must be exactly 10 digits.</p>


                        <Input
                            required
                            type='number'
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            className={clsx(
                                'mb-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>
                    <Field>
                        <Label className="text-sm/6 font-medium text-black">Amount (in ₹)</Label>
                        <Input required type='number'
                            readOnly
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className={clsx(
                                'mb-3 block w-full rounded-lg border-none bg-white py-1.5 px-3 text-sm/6 text-black',
                                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
                            )}
                        />
                    </Field>

                    <div>
                        <button type='button' onClick={generateToken} className='bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded-md text-white mx-auto my-2 text-lg w-full'>
                            {isLoading ? <Spinner /> : "Generate Token"}
                        </button>

                        <button type='submit' className='bg-green-500 w-full hover:bg-green-700 px-4 py-2 rounded-md text-white mx-auto my-2 text-lg'>Pay Now</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default PaymentForm

