'use client'
import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import { Button } from './ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { twMerge } from 'tailwind-merge'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from './ui/dropdown-menu'


const Navbar = () => {
    return (
        <header className='sticky top-0 z-20 border-b border-transparent bg-opacity-80 backdrop-blur-sm backdrop-filter transition-opacity duration-200 ease-in-out mx-auto px-5 md:px-10 h-20 flex items-center justify-center list-none'>
            <nav className='flex justify-between items-center w-full py-4'>
                <div>Logo</div>
                <NavigationMenu className='hidden sm:flex'>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem >
                        <NavigationMenuTrigger>Service</NavigationMenuTrigger>
                        <NavigationMenuContent >
                           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 min-w-max  p-10 bg-white text-gray-900 text-center'>
                            <div className='flex flex-col '>
                                <h3>Software</h3>
                                <div>
                                    <p>UI/UX Design</p>
                                    <p>Web app </p>
                                    <p>Mobile app </p>
                            </div>
                            </div>
                            <div className='flex flex-col '>
                                <h3>Marketing</h3>
                                <div>
                                    <p>Social Media Marketing</p>
                                    <p>Email Marketing</p>
                                    <p>Ads Compaign</p>
                            </div>
                            </div>
                            <div className='flex flex-col '>
                                <h3>SEO</h3>
                                <div>
                                    <p>Web Seo</p>
                                    <p>Youtube SEO</p>
                                    <p>Meta SEO</p>
                            </div>
                            </div>
                            <div className=''>
                                <h3>Graphic Design</h3>
                                <div>
                                    <p>3D Model Design</p>
                                    <p>Motion Graphics</p>
                                    <p>Content Graphics</p>
                            </div>
                            </div>
                           </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blog" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Blog
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/testimonial" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Testimonial
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenu>

                <div className='Customizer flex items-center  gap-x-5 px-3'>
                    <div className='hidden sm:flex gap-x-5 items-center'>
                        <Button className='rounded-md'>Get Started</Button>
                    </div>
                    <div className='flex sm:hidden gap-x-5 items-center'>
                        <DropdownMenu>
                            <DropdownMenuTrigger><BiMenu className='w-7 h-7' /></DropdownMenuTrigger>
                            <DropdownMenuContent className={twMerge(`w-48 h-screen bg-opacity-40 backdrop-blur-md backdrop-filter transition-opacity p-5`)}>
                                <DropdownMenuLabel>Navigation Menu</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem><Link href="/" legacyBehavior passHref>Home</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/about" legacyBehavior passHref>About</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/blog" legacyBehavior passHref>Blogs</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/testimonial" legacyBehavior passHref>Testimonial</Link></DropdownMenuItem>
                                <DropdownMenuItem><Link href="/contact" legacyBehavior passHref>Service</Link></DropdownMenuItem>
                                <DropdownMenuItem>Contact</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Navbar