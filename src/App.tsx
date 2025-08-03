import './App.css'
import CallForPapers from "@/Components/CallForPapers"
import Speakers from "@/Components/Speakers"
import Header from './Components/header'
import Hero from './Components/hero'
import Program from './Components/Program'
import Registration from './Components/Registration'
import Organizers from './Components/Organizers'
import AbstractGuidelines from './Components/AbstractGuidelines'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import Gallery from './Components/Gallery'
import AccommodationTravel from './Components/AccommodationTravel'
import  Sponsors  from './Components/Sponsors'


function App() {

  return (
    <>
      <Header/> 
      <Hero/>
      <CallForPapers />
      <Speakers />
      <Program />
      <Registration />
      <AbstractGuidelines />
      <Organizers />
      <Sponsors/>
      <Gallery />
      <AccommodationTravel />
      <ContactUs />
      <Footer />
    </>
  ) 
}

export default App
