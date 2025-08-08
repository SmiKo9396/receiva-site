import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  const [open,setOpen]=useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-navy/5">
      <div className="section py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
<div className="flex items-center gap-3">
  <Link href="/" aria-label="Receiva home" className="flex items-center">
    <Image
      src="/Logo_Color_V1.svg"  // exact filename in /public
      alt="Receiva"
      width={140}
      height={32}
      priority
      className="h-8 w-auto"
    />
  </Link>
</div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[15px]">
          <a href="#how" className="hover:text-teal">How It Works</a>
          <a href="#who" className="hover:text-teal">Who We Help</a>
          <a href="#lead" className="hover:text-teal">Contact</a>
          <a href="#lead" className="btn-primary">Protect Your Cashflow</a>
        </nav>
        <button className="md:hidden p-2" aria-label="Menu" onClick={()=>setOpen(v=>!v)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-navy/5 bg-white">
          <div className="section py-4 flex flex-col gap-3">
            <a href="#how" onClick={()=>setOpen(false)}>How It Works</a>
            <a href="#who" onClick={()=>setOpen(false)}>Who We Help</a>
            <a href="#lead" onClick={()=>setOpen(false)}>Contact</a>
            <a href="#lead" onClick={()=>setOpen(false)} className="btn-primary text-center">Protect Your Cashflow</a>
          </div>
        </div>
      )}
    </header>
  )
}
