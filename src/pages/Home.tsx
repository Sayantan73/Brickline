import Footer from '../components/Footer'
import Highlights from '../components/Highlights'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Spotlight from '../components/Spotlight'
import Testimonials from '../components/Testimonials'
import UrbanLiving from '../components/UrbanLiving'

export default function Home() {
  return (
    <main className="overflow-hidden bg-white font-sans text-[#242522] antialiased">
      <Hero />
      <Projects />
      <Highlights />
      <UrbanLiving />
      <Spotlight />
      <Testimonials />
      <Footer />
    </main>
  )
}
