// 'use client'
import React from 'react';
import { Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import { Button } from '@headlessui/react';
import { signIn } from 'next-auth/react';

const Signin = () => {
    return (
        <form
            className='m-4'
            action={async (formData) => {
                "use server"
                await signIn("credentials", formData)
                console.log(formData)
            }}
        >
            <Fieldset className=" space-y-8 bg-slate-200 rounded-md w-full md:w-1/2 lg:w-1/3 mx-auto py-4 px-10 md:px-14 lg:px-20">
                <Legend className="text-xl md:text-2xl lg:text-3xl font-bold text-center">Signup to CarHub</Legend>
                <Field>
                    <Label className="block">Email</Label>
                    <Input className="mt-1 block p-2 rounded-md w-full" type="email" name="email" />
                </Field>
                <Field>
                    <Label className="block">Password</Label>
                    <Input className="mt-1 block p-2 rounded-md w-full" name="password" type="password" />
                </Field>

                <Button type="submit" className="w-full rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
                    Signup
                </Button>
            </Fieldset>
        </form >
    );
};

export default Signin;
