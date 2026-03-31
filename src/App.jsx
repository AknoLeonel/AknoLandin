import Header from './components/Header'
import Hero from './components/Hero'
import Pain from './components/Pain'
import Method from './components/Method'
import Portfolio from './components/Portfolio'
import SaaS from './components/SaaS'
import CTA from './components/CTA'

function App() {
  return (
    <>
      <Header />
      <main className="bg-akno-dark min-h-screen text-white pt-20">
        <Hero />
        <Pain />
        <Method />
        <Portfolio />
        <SaaS />
        <CTA />
      </main>
    </>
  )
}

export default App