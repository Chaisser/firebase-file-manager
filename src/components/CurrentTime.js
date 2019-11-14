import React, { useEffect, useState } from "react";
import moment from "moment";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  });
  const tick = () => {
    setTime(new Date());
  };

  return <div>{moment(time).format("HH:mm")}</div>;
};

export default CurrentTime;
