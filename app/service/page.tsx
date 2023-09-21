import React from 'react'
import { createClient } from 'next-sanity';
import Service from '@/components/Service';

async function page() {

  return (
    <div><Service/></div>
  )
}

export default page