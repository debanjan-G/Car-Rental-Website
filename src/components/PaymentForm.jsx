'use client'
import React, { useState } from 'react'
import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import axios from 'axios'
import Spinner from './Spinner/Spinner'
import { useRouter } from 'next/navigation'

const PaymentForm = () => {

    const [token, setToken] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Form Data States

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");




    const generateToken = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get('http://localhost:3000/api/generate-token')
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
            e.preventDefault();

            const formData = { name, email, number, amount };

            const response = await axios.post('http://localhost:3000/api/payment-request', { formData, accessToken: token })

            console.log(response);


            router.push(response.data.redirectURL)


        } catch (error) {

        }
    }

    return (
        <div className='w-full'>



            <div className='bg-green-200 p-3 text-center w-1/2 mx-auto rounded-md my-4 '>
                {token != '' ?
                    <h1 className='text-lg w-fit mx-auto p-2 '>Token Generated!</h1>
                    :
                    <h1 className='text-lg p-2 '>First generate token and then Pay.</h1>
                }
            </div>

            <div className="w-1/4 mx-auto shadow-md bg-slate-300 rounded-md p-8">
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

