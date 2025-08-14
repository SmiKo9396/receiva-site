import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Active from '../components/Active'
import HowItWorks from '../components/HowItWorks'
import WhoWeHelp from '../components/WhoWeHelp'
import Benefits from '../components/Benefits'
import LeadMagnet from '../components/LeadMagnet'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <>
      <Head>
        <title>Receiva — Get Paid Faster</title>
        <meta name="description" content="Active receivables management for Bermuda SMBs — technology + professional follow‑ups to get you paid faster."/>
        <meta property="og:title" content="Receiva — Get Paid Faster"/>
        <meta property="og:description" content="Active receivables management for Bermuda SMBs — technology + professional follow‑ups to get you paid faster."/>
        <meta property="og:type" content="website"/>
      </Head>
      <Header/>
      <main>
        <Hero/>
        <Problem/>
        <Active/>
        <HowItWorks/>
        <WhoWeHelp/>
        <Benefits/>
        <LeadMagnet/>
        <FinalCTA/>
      </main>
      <Footer/>
    </>
  )
}
