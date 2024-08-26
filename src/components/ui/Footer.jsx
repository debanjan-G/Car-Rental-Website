import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../../../public/logo.jpg"

const Footer = () => {
    return (
        <div className="container ">
            <footer className="flex justify-center row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="flex justify-center col mb-3">
                    <div className='flex items-center'>
                        <h1 className='font-extrabold text-sm md:text-2xl m-0'> UrbanDrive</h1>
                        <Image src={logo} alt='urbandrive-logo' className=' object-contain size-20' />
                    </div>

                </div>

                <div className="flex items-center flex-col col mb-3">
                    <h5 className='mb-4'>About</h5>
                    <ul className="nav flex-column text-center">
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">How it Works</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Featured</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Partnership</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Business Relation</Link></li>

                    </ul>
                </div>

                <div className="flex items-center flex-col col mb-3">
                    <h5 className='mb-4'>Company</h5>
                    <ul className="nav flex-column text-center">
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Events</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Blog</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Podcast</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Invite a friend</Link></li>

                    </ul>
                </div>

                <div className="flex items-center flex-col col mb-3">
                    <h5 className='mb-4'>Socials</h5>
                    <ul className="nav flex-column text-center">
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Discord</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Instagram</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Twitter</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Facebook</Link></li>

                    </ul>
                </div>

            </footer >

            <div className='mx-auto flex flex-wrap justify-center gap-4'>
                <p className='text-slate-600'>©2024 UrbanDrive. All rights reserved</p>
                <div className='flex gap-4'>
                    <Link href='/' className='no-underline text-slate-600'>Privacy Policy</Link>
                    <Link href='/' className='no-underline text-slate-600'>Terms & Conditions</Link>
                </div>

            </div>
        </div >
    );
}

export default Footer;
