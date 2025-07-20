import React, { useRef, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FadeInZoom } from "../utils/motion/FadeInZoom";
import emailjs from "@emailjs/browser";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oa7auzc",
        "template_kbkoiur",
        form.current,
        "your_public_key"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset(); // clear form
          setTimeout(() => setSent(false), 4000); // hide after 4 seconds
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <FadeInZoom>
          <p className="text-blue-600 font-medium mb-2">Get in touch with Me</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Are you ready to{" "}
            <span className="bg-blue-100 dark:bg-blue-900 px-2">
              work together?
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            Let's start a Project! Hire Me.
          </p>
        </FadeInZoom>

        <div className="grid md:grid-cols-2 gap-10 items-start text-left">
          <FadeInZoom>
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">
                I’m open to any communication! Feel free to contact me in any
                convenient way.
              </p>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="mt-1 text-blue-600" />
                <span className="text-gray-900 dark:text-white font-medium">
                  +234-706-095-7515
                </span>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="mt-1 text-blue-600" />
                <span className="text-gray-900 dark:text-white font-medium">
                  emmanuelawolu8@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                <span className="text-gray-900 dark:text-white font-medium">
                  Nigeria.
                </span>
              </div>

              <div className="mt-10 flex gap-6 text-2xl text-gray-700 dark:text-gray-300">
                <a
                  href="https://github.com/Emmanuel-Awolu60"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/emao_dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  {/* <FaTwitter /> */}
                  <FaXTwitter />
                </a>
                <a
                  href="https://instagram.com/your-handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </FadeInZoom>

          <FadeInZoom>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className="p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded w-full"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded w-full"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded w-full"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="p-3 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-white rounded w-full"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded transition"
              >
                Send Message
              </button>

              {sent && (
                <p className="text-green-500 font-medium mt-3">
                  ✅ Your message has been sent successfully!
                </p>
              )}
            </form>
          </FadeInZoom>
        </div>
      </div>
    </section>
  );
};

export default Contact;
