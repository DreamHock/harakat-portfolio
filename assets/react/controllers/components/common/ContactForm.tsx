import React, { useState } from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import axios from "axios";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  function submitForm() {
    axios
      .post(process.env.APP_URL + "/messages", form)
      .then((res) => console.log(res.data));
  }
  return (
    <div className=" flex flex-col gap-8 w-[700px]" id="talk">
      <Header primaryHeader="LET'S WORK" secondaryHeader="TOGETHER" />
      <div>
        <div className="flex gap-5 w-full">
          <div className="flex flex-col flex-1">
            <label htmlFor="name" className="text-neutral-400">
              Name
            </label>
            <input
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
              id="name"
              className="p-3 rounded-lg bg-neutral-900 text-white"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="email" className="text-neutral-400">
              Email
            </label>
            <input
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
              id="email"
              className="p-3 rounded-lg bg-neutral-900 text-white"
              placeholder="Your@email.com"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-neutral-400">
            Message
          </label>
          <textarea
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
            }}
            className="rounded-lg bg-neutral-900 text-white h-36 p-3"
            name=""
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <Button
          onClick={() => {
            submitForm();
          }}
          type="submit"
          className="bg-orange-600 w-full py-2 rounded-lg text-white mt-2 hover:bg-orange-500 duration-150"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
