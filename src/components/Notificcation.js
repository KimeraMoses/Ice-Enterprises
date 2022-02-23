import React from "react";
import "./Notificcation.css";

export const NoticationsBar = (props) => {
  const { message, sentDate, time, status } = props;
  return (
    <div className="notification__bar">
      <div className="notification__status">
        <div
          className={`notifications__status_icon ${
            status === "on"
              ? "notifications__status_on"
              : "notifications__status_off"
          }`}
        ></div>
      </div>
      <h4>{message}</h4>
      <h5>Sent {sentDate}</h5>
    </div>
  );
};
const Notifications = () => {
  return (
    <div className="notifications__wrapper">
      <h3>Notifications</h3>
      <div className="notifications__wrapper_inner">
        <NoticationsBar
          message="Don't forget to delegate wearable Bomber Pants by February 1st, 2021."
          sentDate="January 30th, 2021 at 12:00 AM"
          status="on"
        />
        <NoticationsBar
          message="Don't forget to delegate wearable Bomber Pants by February 1st, 2021."
          sentDate="January 30th, 2021 at 12:00 AM"
          status="off"
        />
      </div>
    </div>
  );
};
export default Notifications;
