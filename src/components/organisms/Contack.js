import React from "react";

const Contack = () => {
  const handleSubmit = (e) => {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);

    window.location.href = `mailto:muhamadfirlyramadan20@gmail.com?subject=Message from ${e.target[0].value}&body=${e.target[2].value}`;

    e.preventDefault();
  };
  return (
    <section className="contack-section" id="contack">
      <div className="contack-wrapper">
        <h1>Get in touch 👋</h1>
        <form onSubmit={handleSubmit}>
          <div className="identity-section">
            <input
              type="text"
              placeholder="Tell me about your name"
              autoComplete="off"
              required="required"
            />
            <input
              type="email"
              placeholder="Can you write email here ?"
              autoComplete="off"
              required="required"
            />
          </div>
          <div className="message-section">
            <textarea
              className="message"
              placeholder="Write some message here "
              autoComplete="off"
              required="required"
            ></textarea>
          </div>
          <button type="submit" className="send-message">
            Send Mail
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contack;
