import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageAsync, setValue } from './homeSlice';

function Form() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contact.value);
  const [state, setState] = useState(
    {
      Name: '',
      Email: '',
      message: '',
    },
  );

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(messageAsync(state))
      .then(() => {
        setState({
          Name: '',
          Email: '',
          message: '',
        })
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  };

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function sleep() {
    await timeout(12000);
    dispatch(setValue(false));
  }

  return (
    <form class="overlap-group-container-4">
      <div className="flash">
        {sleep() && value &&
          <p className="poppins-normal-storm-gray-16px">
            I appreciate you reaching out
          </p>
        }
      </div>
      <div className="input-wrapper">
        <div class="inputs">

          <input
            class="overlap-group-4 poppins-normal-storm-gray-16px"
            placeholder="Name*"
            name="Name"
            value={state.Name}
            onChange={handleInput}
            id="name"
            type="text"
          />

          <input class="overlap-group-4 poppins-normal-storm-gray-16px"
            placeholder="Email*"
            name="Email"
            value={state.Email}
            onChange={handleInput}
            id="email"
            type="email"
          />

        </div>

        <div class="overlap-group3-1border-1px-black-2">

          <textarea class="message roboto-normal-manatee-16px"
            name="message"
            value={state.message}
            onChange={handleInput}
            id="message"
            type="text"
            placeholder="Message*"
          ></textarea>

        </div>
      </div>

      <div class="overlap-group1-2">

        <button type="submit"
          value="Submit"
          class="get-in-touch roboto-bold-white-16px"
          onClick={handleSubmit}
        >Get in touch</button>

        <a href="mailto:cg@gmailjob.com" target="_blank" class="align-self-flex-end"
        ><div class="cggmailjobcom roboto-normal-periwinkle-16px">mhdezcoronado@gmail.com</div></a>
      </div>
    </form>
  );
}

export default Form;