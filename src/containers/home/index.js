import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import "./style.scss"
import Dad from "../../components/dad"
import About from "../../components/about"
import DadLeft from "../../resources/images/dad-left.jpg"
import DadRight from "../../resources/images/dad-right.jpg"

const Home = () => {
  return (
    <Layout>
      <Dad />
      <About />
    </Layout>
  )
}

export default Home
