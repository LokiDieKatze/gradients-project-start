import GradientsApp from "./components/GradientsApp"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <GradientsApp />
      </main>
      <Footer />
    </div>
  )
}

export default App