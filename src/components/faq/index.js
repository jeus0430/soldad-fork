import Collapsible from 'react-collapsible';
import "./style.scss"

const FAQ = () => {
  return (
    <div className="faq">
      <h1>F&Q</h1>
      <div className="container-faq">
        <Collapsible trigger="What is the Bullish Llama Club?">
          <p>
            Bullish Llama Club is a community of humans who believes in a crypto future. BLC is starting with a collection of 10,000 Bullish Llamas NFTs—unique digital collectibles living on the Ethereum blockchain.
          </p>
        </Collapsible>

        <Collapsible trigger="Are your NFTs original?">
          <p>
            Every Llama was crafted by FlumenFox4 specifically for the Bullish Llama Club - 100% original and authentic.
          </p>
        </Collapsible>

        <Collapsible trigger="How can I get a Bullish Llama?">
          <p>
            Bullish Llama will be available for purchase on our website through an initial sale. At the time of purchase, a randomly selected Bullish Llama will be minted on the blockchain & delivered to your wallet & Opensea account.
          </p>
        </Collapsible>

        <Collapsible trigger="How were the Bullish Llamas created?">
          <p>
            Each of our Bullish Llamas is unique and randomly generated by AI from over 170 handcrafted traits, including horn, weapon, clothing, and more.
          </p>
        </Collapsible>

        <Collapsible trigger="Are Bullish Llamas minted at random?">
          <p>
            Absolutely, All Llamas are numbered #1 to #10,000 and will be minted at random from the smart contract, including the 100 that we are buying for ourselves and marketing purposes.
          </p>
        </Collapsible>
      </div>
    </div>
  )
}

export default FAQ