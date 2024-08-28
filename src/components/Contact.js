import React from "react";

const Contact = () => {
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-semibold text-[maroon]">Contact Us page</h1>
      <form className="text-center">
        <input
          type="text"
          className="m-3 py-1 px-2 rounded-md"
          placeholder="name"
        />
        <input
          type="text"
          className="m-3 py-1 px-2 rounded-md"
          placeholder="mail"
        />
        <button
          type="button"
          className="m-3 py-1 px-2 rounded-md border border-black border-solid"
          placeholder="name"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
