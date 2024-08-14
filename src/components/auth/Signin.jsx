import React from 'react'
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'
import { Button } from '@headlessui/react'


const Signin = () => {
    return (
        <Fieldset className="space-y-8 bg-slate-200 rounded-md w-1/3 mx-auto py-4 px-20">
            <Legend className="text-2xl font-bold text-center">Signup to CarHub</Legend>
            <Field className=''>
                <Label className="block">Email</Label>
                <Input className="text-center mt-1 block p-2 rounded-md w-full" name="address" />
            </Field>
            <Field className=''>
                <Label className="block">Password</Label>
                <Input className="text-center mt-1 block p-2 rounded-md w-full" name="address" />
            </Field>

            <Button className='w-full rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700'>
                Login
            </Button>


        </Fieldset>
    )
}

export default Signin
