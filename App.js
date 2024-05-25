import logo from './logo.svg';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data'
import './App.css';

function App() {
  const cards = data.map(item=>{
    return (
      <Card
        key={item.id}
        title={item.title}
        location={item.location}
        date={item.Date}
        description={item.description}
        img={item.imageUrl}
        map={item.GoogleMaps}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
