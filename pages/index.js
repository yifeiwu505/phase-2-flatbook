import Head from 'next/head'
import Header from "../components/Header"
import CoContainer from "../components/coContainer"
import { useState } from 'react'
import Link from 'next/link'

export default function Home({search}) {
  
  return (
    <div>
      <Head>
        <title>Flatbook</title>
      </Head>

      {/* there should be a header here */}
      {/* <Header setSearch={setSearch} search={search} /> */}
     
      <main>
        
        <CoContainer search={search} />
        {/* sidebar
        feed
        widget */}
       
      </main>

      
    </div>
  )
}
