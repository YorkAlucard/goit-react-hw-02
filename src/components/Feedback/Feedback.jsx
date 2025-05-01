const Feedback = ({ feedback }) => {
  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total
    ? ((feedback.good / total) * 100).toFixed(2)
    : 0;

  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
