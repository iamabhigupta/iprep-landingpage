/* eslint-disable comma-dangle */
import React, { useState, useEffect } from 'react';

const CountDown = () => {
  // Set the date we're counting down to
  const countDownDate = new Date('June 16, 2023 00:00:00').getTime();

  // Set state variables for days, hours, minutes, and seconds
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds
      const day = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state with new values
      setDays(day);
      setHours(hour);
      setMinutes(minute);
      setSeconds(second);
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Render the countdown timer
  return (
    <div>
      <div className="flex justify-center items-center md:gap-16 text-4xl md:text-5xl lg:text-7xl font-[900] text-center ">
        <div className="space-y-2 md:space-y-3 w-20 md:w-24 lg:w-28">
          <h2 className="">{days}</h2>
          <p className="text-sm md:text-lg font-normal">Days</p>
        </div>
        <div className="space-y-2 md:space-y-3 w-20 md:w-24 lg:w-28">
          <h2 className="">{hours}</h2>
          <p className="text-sm md:text-lg font-normal">Hours</p>
        </div>
        <div className="space-y-2 md:space-y-3 w-20 md:w-24 lg:w-28">
          <h2 className="">{minutes}</h2>
          <p className="text-sm md:text-lg font-normal">Minutes</p>
        </div>
        <div className="space-y-2 md:space-y-3 w-20 md:w-24 lg:w-28">
          <h2 className="">{seconds}</h2>
          <p className="text-sm md:text-lg font-normal">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
