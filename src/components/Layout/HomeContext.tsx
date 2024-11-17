import About from "../about/About";
import Blog from "../blogs/Blog";
import Contact from "../contact/Contact";
import Counter from "../counter/Counter";
import Footer from "../footer/Footer";
import Projects from "../projects/Projects";
import Services from "../Services/Services";
import Skills from "../skills/Skills";

export default function HomeContext() {
  return (
    <div className=''>
       <Services />
        <About />
        <Projects />
        <Counter />
        <Skills />
        <Blog />
        <Contact />
      
    </div>
  )
}
