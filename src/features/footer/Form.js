import React, { useState } from "react";
import { messageAsync, setValue } from "./footerSlice";
import { useDispatch, useSelector } from "react-redux";

function Form() {
  const dispatch = useDispatch();
  const { value } = useSelector(({ form }) => form);
  const [state, setState] = useState({
    Name: "",
    Email: "",
    message: "",
  });

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(messageAsync(state))
      .then(() => {
        setState({
          Name: "",
          Email: "",
          message: "",
        });
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };

  function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function sleep() {
    await timeout(12000);
    dispatch(setValue(false));
  }

  return (
    <form className="form">
      <div className="interested-in-collaborating roboto-bold-scarpa-flow-28px">
        Interested in collaborating?
      </div>

      <p className="if-you-have-an-appli poppins-normal-storm-gray-16px">
        If you have an application you are interested in developing, a feature
        that you need built or a project that need coding, I’d love to help you
        with it.
      </p>

      <div className="flash">
        {sleep() && value && (
          <p className="poppins-normal-storm-gray-16px">
            I appreciate you reaching out
          </p>
        )}
      </div>
      <div className="input-wrapper">
        <div className="inputs">
          <input
            className="overlap-group-4 poppins-normal-storm-gray-16px"
            placeholder="Name*"
            name="Name"
            value={state.Name}
            onChange={handleInput}
            id="name"
            type="text"
          />

          <input
            className="overlap-group-4 poppins-normal-storm-gray-16px"
            placeholder="Email*"
            name="Email"
            value={state.Email}
            onChange={handleInput}
            id="email"
            type="email"
          />
        </div>

        <div className="overlap-group3-1border-1px-black-2">
          <textarea
            className="message roboto-normal-manatee-16px"
            name="message"
            value={state.message}
            onChange={handleInput}
            id="message"
            type="text"
            placeholder="Message*"
          />
        </div>
      </div>

      <div className="overlap-group1-2">
        <button
          type="submit"
          value="Submit"
          className="get-in-touch roboto-bold-white-16px"
          onClick={handleSubmit}
        >
          Get in touch
        </button>

        <a
          href="mailto:cg@gmailjob.com"
          target="_blank"
          className="align-self-flex-end"
          rel="noreferrer"
        >
          <div className="cggmailjobcom roboto-normal-periwinkle-16px">
            mhdezcoronado@gmail.com
          </div>
        </a>
      </div>
    </form>
  );
}

export default Form;
