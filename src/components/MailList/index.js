import { useState } from "react";

const MailList = () => {
    const [text, setText] = useState("")
    return (
        <div className="mail d-flex column align-items-center">
            <h1 className="mail__title">Save time, save money!</h1>
            <span className="mail__desc">Sign up and we'll send the best deals to you</span>
            <div className="mailInput__container">
                <input
                    value={text}
                    type="text"
                    placeholder="Your Email"
                    onChange={({ target }) => setText(target.value)}
                />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default MailList;