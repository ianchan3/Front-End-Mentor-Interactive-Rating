import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ThankYouPage from './ThankYouPage/ThankYouPage';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thankyouPage" element={<ThankYouPage />}/>
    </Routes>
    </div>

  );
}

export default App;
