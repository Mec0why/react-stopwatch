import styles from './Button.module.scss';

const Button = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.action();
  };

  return (
    <button
      onClick={handleClick}
      className={styles.button}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
