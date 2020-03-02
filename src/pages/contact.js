import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import contactStyles from './contact.module.scss';

const Contact = () => {

    return (
        <Layout>
            <SEO title={'Contact'}/>
            <div>
                <h1>Contact</h1>
            </div>
            <div>
                <form name="contact" method="POST" data-netlify="true">
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
        </Layout>
    )
}

export default Contact