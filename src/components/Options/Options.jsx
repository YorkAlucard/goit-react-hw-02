import Button from '../Button/Button';

const Options = ({ estim, total, reset }) => {
  return (
    <div>
      <Button estim={() => estim('good')}>Good</Button>
      <Button estim={() => estim('neutral')}>Neutral</Button>
      <Button estim={() => estim('bad')}>Bad</Button>
      {total > 0 && <Button estim={reset}>Reset</Button>}
    </div>
  );
};

export default Options;
