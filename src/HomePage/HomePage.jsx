import "./HomePage.css";
import Star from '../assets/icon-star.svg';
import { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ThankYouPage from "../ThankYouPage/ThankYouPage";


export default function HomePage() {
  const [selection, setSelection] = useState();

  const rating1 = 1;
  const rating2 = 2;
  const rating3 = 3;
  const rating4 = 4;
  const rating5 = 5;

  return (
    <div className="HomePage">
    <div className="HomePage-container">
      <div className='HomePage-star-icon'>
        <img src={Star} alt="star" />
      </div>
      <div className='HomePage-description'>
        <h1>How did we do?</h1>
        <span>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</span>
      </div>
      <div className='HomePage-ratings'>
        <form action="http://localhost:3000/thankyouPage" method="GET">
          <ul>
            <li onClick={() => setSelection(rating1)}>{rating1}</li>
            <li onClick={() => setSelection(rating2)}>{rating2}</li>
            <li onClick={() => setSelection(rating3)}>{rating3}</li>
            <li onClick={() => setSelection(rating4)}>{rating4}</li>
            <li onClick={() => setSelection(rating5)}>{rating5}</li>
          </ul>
          <input name="rating" id="rating" value={selection} />
          <div className='HomePage-submit-button'>
            <button>SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}