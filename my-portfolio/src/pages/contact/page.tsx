"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { useForm, ValidationError } from "@formspree/react";
import { FaLinkedin as LinkedInIcon } from "react-icons/fa";
import { FaGithubSquare as GitHubIcon } from "react-icons/fa";

const Contact = () => {
  const linkedInStyle = { color: "#0a66c2" };
  const gitHubStyle = { color: "#6e5494" };

  const [state, handleSubmit] = useForm("mgvzjlod");
  const formRef = useRef<HTMLFormElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const infoContainerRef = useRef<HTMLDivElement>(null);
  const contactSection1Ref = useRef<HTMLDivElement>(null);
  const contactSection2Ref = useRef<HTMLDivElement>(null);
  const contactSection3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.succeeded && formRef.current) {
      formRef.current.reset();
    }
  }, [state.succeeded]);

  useEffect(() => {
    const observers = [
      { ref: titleRef, className: 'fade-in-up' },
      { ref: formContainerRef, className: 'fade-in-left', delay: 50 },
      { ref: infoContainerRef, className: 'fade-in-right', delay: 75 },
      { ref: contactSection1Ref, className: 'fade-in-up', delay: 100 },
      { ref: contactSection2Ref, className: 'fade-in-up', delay: 125 },
      { ref: contactSection3Ref, className: 'fade-in-up', delay: 150 },
    ].map(({ ref, delay }) => {
      if (!ref.current) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              ref.current?.classList.add('visible');
            }, delay || 0);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );
      
      observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach(obs => obs?.disconnect());
    };
  }, []);

  return (
    <>
      <h3 ref={titleRef} className={`${styles.sectionTitle} fade-in-up`}>Contact</h3>

      {state.succeeded && (
        <p role="status" className={styles.success}>
          Tack! Ditt meddelande är skickat. 🎉
        </p>
      )}
      {Array.isArray(state.errors) && state.errors.length > 0 && (
        <p role="alert" className={styles.error}>
          Något gick fel – kolla fälten och försök igen.
        </p>
      )}

      <section className={styles.contactContainer}>
        <div ref={formContainerRef} className={`${styles.formContainer} fade-in-left delay-200`}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles.theForm}>
            <div className={styles.formSection}>
              <label htmlFor="name">Name</label>
              <input
                style={{ width: "90%" }}
                type="text"
                id="name"
                name="name"
                placeholder="Your name here..."
                required
                disabled={state.submitting}
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            <div className={styles.formSection}>
              <label htmlFor="email">Email</label>
              <input
                style={{ width: "90%" }}
                type="email"
                id="email"
                name="email"
                placeholder="Your email here..."
                required
                disabled={state.submitting}
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div className={styles.formSection}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                required
                rows={5}
                style={{
                  width: "90%",
                  padding: "12px",
                  fontSize: "16px",
                  lineHeight: "1.4",
                  boxSizing: "border-box",
                  resize: "none",
                }}
                disabled={state.submitting}
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <input
              className={styles.submitButton}
              type="submit"
              value={state.submitting ? "Skickar..." : "Submit"}
              disabled={state.submitting}
            />
          </form>
        </div>

        <div ref={infoContainerRef} className={`${styles.infoContainer} fade-in-right delay-300`}>
          <div ref={contactSection1Ref} className={`${styles.contactSection} fade-in-up delay-400`}>
            <h1 style={{ marginTop: "20px" }}>Where do I live?</h1>
            <p>
              Right now I live in Stockholm. More exactly outside Stockholm at
              Värmdö
            </p>
          </div>
          <div ref={contactSection2Ref} className={`${styles.contactSection} fade-in-up delay-500`}>
            <h1 style={{ marginTop: "20px" }}>
              What am I searching for right now?
            </h1>
            <p>
              Right now I&apos;m searching for a LIA-position in Stockholm and
              hopefully a job after that. Feel free to contact if you have a
              spot!
            </p>
          </div>
          <div ref={contactSection3Ref} className={`${styles.contactSection} fade-in-up delay-600`}>
            <h1 style={{ marginTop: "20px" }}>My socials</h1>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/felix-olsson-stenersj%C3%B6-65b6031b4/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon
                  className={styles.iconSize}
                  style={linkedInStyle}
                />
              </a>
              <a
                href="https://github.com/puffisbre"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon
                  className={styles.iconSize}
                  style={gitHubStyle}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Contact.displayName = "Contact";

export default Contact;

