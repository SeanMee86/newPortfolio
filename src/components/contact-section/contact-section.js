import React, { Component } from "react"
import contactStyles from "./contact.module.scss";


class ContactSection extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Contact</h1>
                    <p className={contactStyles.contact}>Hi! Thanks for visiting my site, please feel free to drop me a line and inquire on how I may be of assistance to you or your organization.</p>
                </div>
                <div>
                    <form name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label className={contactStyles.labels}><span>Name:</span> <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label className={contactStyles.labels}><span>Email:</span> <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label className={contactStyles.labels}><span>Subject:</span> <input type="text" name="subject" /></label>
                        </p>
                        <p>
                            <label className={contactStyles.labels}><span>Message:</span> <textarea name="message" /></label>
                        </p>
                        <p>
                            <button className={contactStyles.contactBtn} type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </>
        )
    }
}

export default ContactSection;
