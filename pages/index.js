import Head from 'next/head'
import Header from "../components/Header"
import CoContainer from "../components/coContainer"
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function Home() {
  const [search, setSearch] = useState('')
  return (
    <div>
      <Head>
        <title>Flatbook</title>
      </Head>

      {/* there should be a header here */}
      <Header setSearch={setSearch} search={search} />
     
      <main>
        <CoContainer search={search} />
        {/* sidebar
        feed
        widget */}
        
      </main>

      
    </div>
  )
}
