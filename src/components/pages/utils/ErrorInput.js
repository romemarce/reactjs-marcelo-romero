import React from "react";
const ErrorInput = ({ title }) => {
  return (

    <article className="message is-warning">
      <div className="message-body p-2 mt-3">
        {title}
      </div>
    </article>)
}
export default ErrorInput