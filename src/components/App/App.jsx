import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('feedback')) || {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const handleFeedback = type => {
    setFeedback(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };
  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  return (
    <div>
      <Description />
      <Options
        estim={handleFeedback}
        total={feedback.good + feedback.neutral + feedback.bad}
        reset={handleReset}
      />
      <Feedback feedback={feedback} />
    </div>
  );
};

export default App;
