import React, { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState("null");
  const timing = new Date();
  const getDate =
    timing.getDate() +
    "/" +
    (timing.getMonth() + 1) +
    "/" +
    timing.getFullYear();
  const getTime =
    timing.getHours() + ":" + timing.getMinutes() + ":" + timing.getSeconds();

  const [now, setNow] = useState(null);
  console.log(getDate);
  console.log(getTime);

  useEffect(() => {
    clock.start();
  }, []);

  function Clock(id) {
    var clock = this;
    var timeout;
    var time;

    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
    this.days = 0;
    this.stop = stop;
    this.start = start;

    function stop() {
      clearTimeout(timeout);
    }

    function start() {
      timeout = setTimeout(tick, 0);
      time = Date.now();
    }

    function tick() {
      time += 1000;
      timeout = setTimeout(tick, time - Date.now());
      display();
      update();
    }

    function display() {
      var hours = clock.hours;
      var minutes = clock.minutes;
      var seconds = clock.seconds;
      var days = clock.days;

      hours = hours < 10 ? "0" + hours : "" + hours;
      minutes = minutes < 10 ? "0" + minutes : "" + minutes;
      seconds = seconds < 10 ? "0" + seconds : "" + seconds;
      days = days < 10 ? "0" + days : "" + days;

      setNow(hours + "h" + " : " + minutes + "m" + " Day: " + days);
      //   return <h1>{hours + ":" + minutes + ":" + seconds}</h1>;
      //   console.log(hours + ":" + minutes + ":" + seconds);
    }

    function update() {
      var seconds = (clock.seconds += 10);
      var minutes = (clock.minutes += 10);

      if (seconds === 60 || seconds >= 60) {
        clock.seconds = 0;
        var minutes = ++clock.minutes;

        if (minutes >= 60 || minutes === 60) {
          clock.minutes = 0;
          var hours = ++clock.hours;

          if (hours === 24) {
            clock.hours = 0;
            var days = ++clock.days;
          }
        }
      }
      //   if (days === 31) {
      //     clock.days = 0;
      //   }
    }
  }
  var clock = new Clock("clock");
  //   console.log(clock.start());
  return (
    <div>
      <h1>{time}</h1>
      {/* <h2>{getDate}</h2> */}
      <h2></h2>
      <h1>{now}</h1>
    </div>
  );
}
