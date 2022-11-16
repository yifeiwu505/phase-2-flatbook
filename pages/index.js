import Head from 'next/head'
import Header from "../components/Header"
import CoContainer from "../components/coContainer"
import { useRouter } from 'next/router'
import { useState } from 'react'
import Sidebar from "../components/Sidebar";


export default function Home() {
  const [search, setSearch] = useState('')
  return (
    <div className="h-screen">
      <Head>
        <title>Flatbook</title>
      </Head>

      {/* there should be a header here */}
      <Header setSearch={setSearch} search={search} />
     
      <main className="flex">
        <CoContainer search={search} />
        <Sidebar />
        {/* sidebar
        feed
        widget */}
        
      </main>

      
    </div>
  )
}
