import React from 'react'
import Script from 'next/script'
import { Contact } from 'lucide-react'
 const ContactUs= () => {
  return (
    <div className='flex justify-center items-center min-h-screen'><h1>This is the Contact Us Page</h1>
      <div className="flex justify-center items-center mx-auto p-5 calendly-inline-widget h-[700px] w-[400px] overflow-hidden" data-url="https://calendly.com/fardeenjutt99/introductory-call"  ></div>
      
    </div>
  )
}

export default ContactUs