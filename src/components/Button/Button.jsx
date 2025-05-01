import styles from './Button.module.css';

const Button = ({ estim, children }) => {
  return (
    <button className={styles.button} type="button" onClick={estim}>
      {children}
    </button>
  );
};

export default Button;
