import styles from './Timer.module.scss';
import { useState } from 'react';
import FormattedTime from '../FormatTime/FormatTime';
import Button from '../Button/Button';

const Timer = () => {
  const [display, setDisplay] = useState(null);
  const [time, setTime] = useState(0);
  const [state, setState] = useState(false);

  const startTimer = () => {
    if (state === false) {
      setState(true);
      setDisplay(
        setInterval(() => {
          setTime((prevValue) => prevValue + 5);
        }, 1)
      );
    }
  };

  const stopTimer = () => {
    clearInterval(display);
    setState(false);
  };

  const resetTimer = () => {
    setTime(0);
    clearInterval(display);
    setState(false);
  };

  return (
    <div className={styles.timer}>
      <FormattedTime time={time}></FormattedTime>
      <Button action={startTimer} disabled={state}>
        Start
      </Button>
      <Button action={stopTimer}>Stop</Button>
      <Button action={resetTimer}>Reset</Button>
    </div>
  );
};

export default Timer;
