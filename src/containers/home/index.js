import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import Introduction from "components/introduction"
import "./style.scss"

const Home = () => {
  return (
    <Layout>
      <Introduction />
    </Layout>
  )
}

export default Home
