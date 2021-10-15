import "./style.scss"
import Dads from "../../resources/images/dads-gif.gif"

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">Meet SOL Family NFT collection</h1>
      <div className="about-img">
        <div className="about-img-container">
          <h3 className="about-img-container-title">DADS</h3>
          <img src={Dads} alt="" className="about-img-container-avatar" />
        </div>
        <div className="about-img-container">
          <h3 className="about-img-container-title">DADS</h3>
          <div className="about-img-container-text">
            Coming Soon
          </div>
        </div>
        <div className="about-img-container">
          <h3 className="about-img-container-title">DADS</h3>
          <div className="about-img-container-text">
            Coming Soon
          </div>
        </div>
      </div>
    </div>
  )
}

export default About