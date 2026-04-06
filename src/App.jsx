import styles from './App.module.css'
import {Navbar} from './components/Navbar/Navbar'
import {Hero} from './components/Hero/Hero'
import {About} from './components/About/About'
import {Experience} from './components/Experience/Experience'
import {Projects} from './components/Projects/Projects'
import {Contact} from './components/Contact/Contact'
import {Skills} from './components/Skills/Skills'
import {ScrollHint} from './components/ScrollHint/ScrollHint'

function App() {
  return <div className={styles.App}>
    <div className={styles.blurTop} />
    <div className={styles.blurBottom} />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Contact />
    <ScrollHint />
  </div>;
}

export default App
