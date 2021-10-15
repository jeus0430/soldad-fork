import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import Introduction from "components/introduction"
import Club from "components/club"
import "./style.scss"

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <Club />
    </Layout>
  )
}

export default Home
