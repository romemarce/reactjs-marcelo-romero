const ErrorMessage = ({ title, message }) => {
  return (
    <article className="message is-warning" style={{maxWidth:"400px", margin:"20px auto"}}>
      <div className="message-header">
        <p>{title}</p>
      </div>
      <div className="message-body">{message}</div>
    </article>
  )
}
export default ErrorMessage