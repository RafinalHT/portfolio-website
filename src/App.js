import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Project';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
    </div>
  );
}

export default App;
