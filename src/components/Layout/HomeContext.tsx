import About from "../about/About";
import Blog from "../blogs/Blog";
import Contact from "../contact/Contact";
import HeaderImg from "../header/HeaderImg";
import Projects from "../projects/Projects";

export default function HomeContext() {
  return (
    <div>
      <HeaderImg />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  )
}
