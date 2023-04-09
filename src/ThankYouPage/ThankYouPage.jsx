import ThankYou from '../assets/illustration-thank-you.svg'
import './ThankyouPage.css'

export default function ThankYouPage() {
  const queryParameters = new URLSearchParams(window.location.search)
  const rating = queryParameters.get("rating")
  return (
    <div className="ThankYouPage">
      <div className='ThankYouPage-container'>
        <img src={ThankYou} alt="thankyou" />
        <h1 id="rating-description" >You selected {rating} out of 5</h1>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, dont't hesitate to get in touch!</p>
      </div>
    </div>
  )
}