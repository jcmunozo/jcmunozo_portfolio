import styles from  './App.module.css'
import {Navbar} from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import {About} from './components/About/About'

function App() {

  return <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
  </div>;
}

export default App
