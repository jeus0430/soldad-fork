import "./style.scss"
import DadLeft from "../../resources/images/dad-left.jpg"
import DadRight from "../../resources/images/dad-right.jpg"

const Dad = () => {
  return (
    <div className="sc-kEjbQP dlCYkT">
      <div className="sc-bdfBQB ePRlQL">
        <div className="sc-idOiZg hwzuHs">
          <h1 className="sc-dIUeWJ eoNSGu">
            SOL Dads
          </h1>
        </div>
        <div className="sc-hHfuMS cVAHpO">
          <div className="sc-fKFxtB gqFefP">
            <img src={DadLeft} alt="Dad Image - Left" className="sc-bBXrwG dVyhTW" />
          </div>
          <div className="sc-dmlqKv jZwZCI">
            <h1 className="sc-kfzBvY hotrds">Price: 1.75 SOL</h1>
            <div className="sc-iwyWTf IRtGk">
              <span className="sc-cxFLGX bTmvvh">SOL Dads</span> is the first <b>NFT</b> collection of the so called <span className="sc-cxFLGX bTmvvh">SOL Family</span>.
            </div>
            <div className="sc-iwyWTf IRtGk">
              <ul className="sc-lmoMya ipnOFO">
                <li className="sc-iJuVqt fXIZCL">- Buy Dad for 1.75 SOL</li>
                <li className="sc-iJuVqt fXIZCL">- Buy Mom for TBA (when available)</li>
                <li className="sc-iJuVqt fXIZCL">- Get a free Child (when available)</li>
                <li className="sc-iJuVqt fXIZCL">- Receive rewards in SOL and NFT for being a member of FamilyDAO
                </li>
              </ul>
            </div>
            <div className="sc-iwyWTf IRtGk">
              <div className="sc-iktFfs hqmTU">
                <span>02:21:59:32</span>
              </div>
              <h2 className="sc-jJEKmz jBFUHn">(17th October 2021, 21:00:00 UTC)</h2>
            </div>
          </div>
          <div className="sc-fKFxtB gqFefP">
            <img src={DadRight} alt="Dad Image - Right" className="sc-bBXrwG fJKgsh" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dad
