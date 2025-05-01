import Button from '../Button/Button';

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <Button estim={() => updateFeedback('good')}>Good</Button>
      <Button estim={() => updateFeedback('neutral')}>Neutral</Button>
      <Button estim={() => updateFeedback('bad')}>Bad</Button>
      {totalFeedback > 0 && <Button estim={resetFeedback}>Reset</Button>}
    </div>
  );
};

export default Options;
