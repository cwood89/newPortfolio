import React from "react";

function Contact() {
  return (
    <div id="main">
      <section>
        <form method="post" action="#">
          <div className="fields">
            <div className="field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label for="message">Message</label>
              <textarea name="message" id="message" rows="3"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Send Message" /></li>
          </ul>
        </form>
      </section>
    </div>
  )
}
export default Contact;