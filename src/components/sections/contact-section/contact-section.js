import React, { Component } from "react"
import * as contactStyles from "./contact.module.scss";


class ContactSection extends Component {
    render() {
        return (
            <>
                <div>
                    <h1>Contact</h1>
                    <p className={contactStyles.contact}>Hi! Thanks for visiting my site, please feel free to drop me a line and inquire on how I may be of assistance to you or your organization.</p>
                </div>
                <div style={{width: "100%"}}>
                    <form style={{maxWidth: "400px"}} name="contact" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <p>
                            <label className={contactStyles.labels} htmlFor={'name'}>Name</label>
                            <input id={'name'} placeholder={'Name'} type="text" name="name" />
                        </p>
                        <p>
                            <label className={contactStyles.labels} htmlFor={'email'}>Email</label>
                            <input id={'email'} placeholder={'Email'} type="email" name="email" />
                        </p>
                        <p>
                            <label className={contactStyles.labels} htmlFor={'subject'}>Subject</label>
                            <input id={'subject'} placeholder={'Subject'} type="text" name="subject" />
                        </p>
                        <p>
                            <label className={contactStyles.labels} htmlFor={'message'}>Message</label>
                            <textarea id={'message'} placeholder={'Message'} name="message" />
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
