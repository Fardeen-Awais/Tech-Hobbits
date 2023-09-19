import React from 'react'
import Image from 'next/image'
import { footerLinks } from '@/app/constants'
import Link from 'next/link'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row items-center justify-center bg-opacity-20 backdrop-blur-lg backdrop-filter transition-opacity mx-auto gap-10  p-10 min-h-20 m-3'>
            <div className='flex flex-col gap-2'>
                <Image src="/resend.png" width={100} height={100} alt="Logo" />
                <h4 className='max-w-xs font-extralight'>You can call us from all over the globe. Any Help needed feel free to contact us.</h4>
                <p>+92 324402348</p>
            </div>
            <div className="grid grid-cols-3 gap-10">
                {footerLinks.map((item) => (
                    <div key={item.title} className="flex flex-col gap-4">
                        <h3 className="font-bold">{item.title}</h3>
                        <div className="flex flex-col gap-5">
                            {item.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center gap-3'>
                <h3>Follow us on</h3>
                <div className='flex gap-5'>
                    <BsFacebook />
                    <BsTwitter />
                    <BsInstagram />
                </div>
                <p></p>
            </div>
        </footer>
    )
}

export default Footer