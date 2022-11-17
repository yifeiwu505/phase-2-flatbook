import Head from 'next/head'
import Header from "../components/Header"
import CoContainer from "../components/coContainer"
import { useState } from 'react'
import Sidebar from "../components/Sidebar";
import Link from 'next/link'





export default function Home({search, people, setPeople}) {
  

  return (
    <div className="h-screen">
      <Head>
        <title>Flatbook</title>
      </Head>

      {/* there should be a header here */}
      {/* <Header setSearch={setSearch} search={search} /> */}
     
      <main className="flex">
        <CoContainer search={search} people={people} setPeople={setPeople} />
        < Sidebar />
        {/* <Sidebar /> */}
        {/* sidebar
        feed
        widget */}
       
      </main>

      
    </div>
  )
}
