import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="container ">
            <footer className="justify-center row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                <div className="col mb-3">
                    <h1 className='text-2xl font-extrabold'>🚗  CarHub</h1>
                    <p className="text-body-secondary">CarHub {new Date().getFullYear()}</p>
                    <p className="text-body-secondary">All Rights Reserved ©</p>
                </div>

                <div className="col mb-3">
                    <h5>About</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">How it Works</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Featured</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Partnership</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Business Relation</Link></li>

                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Company</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Events</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Blog</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Podcast</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Invite a friend</Link></li>

                    </ul>
                </div>

                <div className="col mb-3">
                    <h5>Socials</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Discord</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Instagram</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Twitter</Link></li>
                        <li className="nav-item mb-2"><Link href="#" className="nav-link p-0 text-body-secondary">Facebook</Link></li>

                    </ul>
                </div>

            </footer >
            <div className='mx-auto flex flex-wrap justify-between '>
                <p className='text-slate-600'>©2024 CarHub. All rights reserved</p>
                <div className='flex gap-4'>
                    <Link href='/' className='no-underline text-slate-600'>Privacy Policy</Link>
                    <Link href='/' className='no-underline text-slate-600'>Terms & Conditions</Link>
                </div>

            </div>
        </div >
    );
}

export default Footer;
