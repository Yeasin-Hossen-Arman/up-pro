import { useState } from 'react'
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import Hero from '../components/Hero'
import MainSection from '../components/MainSection'


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

    <>

    <Hero />
    <MainSection />
    </>
    


  )
}
