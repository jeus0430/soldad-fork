import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import "./style.scss"
import DadLeft from "../../resources/images/dad-left.jpg"
import DadRight from "../../resources/images/dad-right.jpg"
const Home = () => {
  return (
    <Layout>
      <div>
        <h1>SOL Dads</h1>
        <div className="flex">
          <div style={{ flex: "1 0 0%" }}>
            <img style={{ maxWidth: "100%" }} src={DadLeft} />
          </div>
          <div style={{ borderRadius: "10px", border: "1px solid white", margin: "0 10rem", flex: "2 0 0%" }} >
            <h2 style={{ borderBottom: "1px solid white", padding: "30px" }}>Price: 1.75 SOL</h2>
            <p>SOL Dads is the first NFT collection of the so called SOL Family.</p>
            <ul style={{ margin: "0 10rem" }}>
              <li>Buy Dad for 1.75 SOL</li>
              <li>Buy Mom for TBA(when available)</li>
              <li>Get a free Child(when available)</li>
              <li>Receive rewards in SOL and NFT for being a member of FamilyDAO</li>
            </ul>
            <p>02:23:01:04</p>
            <p>(17th October 2021, 21:00:00 UTC)</p>
          </div>
          <div style={{ flex: "1 0 0%" }} >
            <img style={{ maxWidth: "100%" }} src={DadRight} />
          </div>
        </div>
      </div>
      <div>

      </div>
    </Layout>
  )
}

export default Home
