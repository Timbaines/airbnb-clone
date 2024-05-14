import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js'
console.log(data)
import './App.css'

function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })

    return (
    <>
        <Navbar/>
        <Hero/>
        <section className="cards-list">
            {cards}
        </section>
    </>
  )
}

export default App
