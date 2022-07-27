/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";

const Countdown = () => {
  const [date, setDate] = useState("00");
//   const [time ,setTime] =useState(null)

console.log(typeof(date))

  useEffect(() => {
    fetch("https://sleepy-depths-81993.herokuapp.com/discount")
      .then((res) => res.json())
      .then((data) => setDate(data[0].data));
  }, []);
//   const newData = date[0].data;
//   console.log(newData)
  // Time Coding
//   setTime(date)
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("10");
 

  let interval = useRef();

  const startTimer = () => {
    // console.log(date[0].data)

    const countdownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Stop Timer
        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  // use Effect
  // Component DidMount
  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="Countdown">
        <ul>
          <li>
            <h3>{timerDays}</h3>
            <p>Days</p>
          </li>

          <li>
            <h3>{timerHours}</h3>
            <p>Hours</p>
          </li>

          <li>
            <h3>{timerMinutes}</h3>
            <p>Minutes</p>
          </li>

          <li>
            <h3>{timerSeconds}</h3>
            <p>Seconds</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Countdown;
