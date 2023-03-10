import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/d7d78ef0-9ede-11ed-82c7-3d7607318e65";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  const ty = "Thank You!"
  const it = "We'll be in touch soon."

  if (submitted) {
    return (
      <>
        <h2>{ty}</h2>
        <div>{it}</div>
      </>
    );
  }  else {

  return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div>
            <h1>Contact Us</h1>
            </div>
            <div>
            <p1>Send Us a Message Today:</p1>
            </div>
        <div>
            <input type="text" placeholder="Your name" name="name" required />
        </div>
        <div >
            <input type="email" placeholder="Email" name="email" required />
        </div>
        <div>
            <textarea placeholder="Your message" name="message" required />
        </div>
        <div>
            <button > Send a message </button>
        </div>
        <p3 className= "P3"> By submitting your message and personal details you are permitting us to contact you by these means in response to your inquiry. </p3>
        </form>
    )}
}
