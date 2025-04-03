import Popup from 'reactjs-popup'
import {FaRegSmile} from 'react-icons/fa'
import './index.css'

const FunFactsPopup = () => (
  <Popup
    trigger={
      <button className="smiley">
        {' '}
        <FaRegSmile size={30} />{' '}
      </button>
    }
    modal
    position="bottom right"
  >
    {close => (
      <div className="popup-content">
        <h2>Did You Know? 🤔</h2>

        <p>
          {' '}
          🚀 My first React app was just a button that changed color – now I
          build full-stack applications!
        </p>
        <p>
          💡 I believe every bug teaches a new lesson! Debugging is just another
          way of learning.
        </p>
        <button type="button" className="btn" onClick={close}>
          Close
        </button>
      </div>
    )}
  </Popup>
)

export default FunFactsPopup
