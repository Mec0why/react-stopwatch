import styles from './FormatTime.module.scss';

const FormattedTime = (props) => {
  let hours = ('0' + Math.floor(props.time / 3600000)).slice(-2);
  let minutes = ('0' + (Math.floor(props.time / 60000) % 60)).slice(-2);
  let seconds = ('0' + (Math.floor(props.time / 1000) % 60)).slice(-2);
  let centiseconds = ('0' + (Math.floor(props.time / 10) % 100)).slice(-2);

  return (
    <div className={styles.time}>
      {hours} : {minutes} : {seconds} : {centiseconds}
    </div>
  );
};

export default FormattedTime;
