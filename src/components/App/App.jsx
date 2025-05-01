import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

const App = () => {
  // Завантаження стану з localStorage
  const [feedback, setFeedback] = useState(() => {
    const storedFeedback = localStorage.getItem('feedback');
    return storedFeedback
      ? JSON.parse(storedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  // Оновлюємо localStorage при зміні стану
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  // Обчислення загальної кількості та відсотка позитивних відгуків
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
    : 0;

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default App;
