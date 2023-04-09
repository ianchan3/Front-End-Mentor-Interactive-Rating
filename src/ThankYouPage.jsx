import ThankYou from './assets/illustration-thank-you.svg'

export default function ThankYouPage() {
  const queryParameters = new URLSearchParams(window.location.search)
  const rating = queryParameters.get("rating")
  return (
    <div className="ThankYouPage">
      <img src={ThankYou} alt="thankyou" />
      <h1>Thank you Page</h1>
      <h1>You have selected {rating} out of 5</h1>
    </div>
  )
}