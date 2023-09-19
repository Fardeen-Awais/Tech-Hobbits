'use client'
import React from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    
  } from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

const Navbar = () => {
  return (
<NavigationMenu className='list-none'>
  <NavigationMenuList>
    <NavigationMenuItem className='w-full h-full'>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent className='flex w-2/4 h-96 px-60 bg-slate-400'>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>


  </NavigationMenuList>
  <NavigationMenuItem>
  <Link href="/docs" legacyBehavior passHref>
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      Documentation
    </NavigationMenuLink>
  </Link>
</NavigationMenuItem>
</NavigationMenu>

  )  
}

export default Navbar