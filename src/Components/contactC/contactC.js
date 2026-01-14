import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import "../../ComponentsCSS/contact.css";
import Selected from "./handleSelectC";

const ContactC = () => {
  const [FN, setFN] = useState("");
  const [LN, setLN] = useState("");
  const [email, setEmail] = useState("");
  const [selected, setSelected] = useState(""); // country
  const [data, setData] = useState(""); // message

  // submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitOk, setSubmitOk] = useState(false);
  const [submitErr, setSubmitErr] = useState("");

  async function onSubmit() {
    // clear previous state
    setSubmitOk(false);
    setSubmitErr("");

    // basic validation (optional but recommended)
    if (!FN.trim() || !LN.trim() || !email.trim() || !selected.trim() || !data.trim()) {
      setSubmitErr("Please fill out all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("https://blogbackend.precisionstock.io/contactme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body shape matches your screenshot: { data: { fn, ln, email, country, message } }
        body: JSON.stringify({
          data: {
            fn: FN,
            ln: LN,
            email: email,
            country: selected,
            message: data,
          },
        }),
      });

      // If backend returns 500, fetch does NOT throw; we check res.ok/status
      if (!res.ok) {
        // try to read any message body, but don’t depend on it
        let extra = "";
        try {
          const text = await res.text();
          if (text) extra = ` (${text.slice(0, 140)})`;
        } catch (_) {}

        throw new Error(`Request failed with status ${res.status}${extra}`);
      }

      // Expecting JSON: { id: 2 }
      const json = await res.json();

      if (json && typeof json.id === "number") {
        setSubmitOk(true);

        // (Optional) clear form on success
        // setFN(""); setLN(""); setEmail(""); setSelected(""); setData("");
      } else {
        throw new Error("Unexpected response from server.");
      }
    } catch (err) {
      setSubmitErr(
        "Sorry — something went wrong sending your message. Please try again in a moment."
      );
      // If you want to debug:
      // console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={"contactContainer"}>
      <div className={"contactTitle"}>Contact Me</div>

      <div className={"socialHandle"}>
        <SocialIcon url={"https://github.com/oscarmmgg1234"} network={"github"} style={{ marginRight: 20 }} />
        <SocialIcon url={"https://www.instagram.com/oscarmmgg/"} network={"instagram"} style={{ marginRight: 20 }} />
        <SocialIcon url={"https://www.linkedin.com/in/oscar-maldonado-597761153/"} network={"linkedin"} style={{ marginRight: 20 }} />
        <SocialIcon url={"https://oscarmmgg1234.github.io/blog/"} network={"bandsintown"} />
      </div>

      <form className="ui form" id={"form"}>
        <div className="field">
          <label id={"label"}>First Name</label>
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            value={FN}
            onChange={(event) => setFN(event.target.value)}
          />
        </div>

        <div className="field">
          <label id={"label"}>Last Name</label>
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            value={LN}
            onChange={(event) => setLN(event.target.value)}
          />
        </div>

        {/* Country select */}
        <Selected select={selected} setSelect={setSelected} />

        <div className="field">
          <label id={"label"}>E-mail</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="field">
          <label id={"label"}>Message</label>
          <textarea
            rows="2"
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
        </div>

        <button
          className="ui button"
          type="button"
          id={"submit"}
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

        {/* Status messages */}
        {submitOk ? (
          <div style={{ color: "white", fontSize: 20, marginTop: 10 }}>
            Sent successfully — thank you {FN} {LN}. I’ll get back to you soon!
          </div>
        ) : null}

        {submitErr ? (
          <div style={{ color: "#ffd6d6", fontSize: 16, marginTop: 10 }}>
            {submitErr}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default ContactC;
