import React from "react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { createNewCar } from "../../conf/api";
import Modal from "react-modal";

function Login() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();
  const [loginState, setLoginState] = useState(true);

  const loginHandler = (e) => {
    e.preventDefault();

    const account = { username, password };

    if (account.username === "admin" && account.password === "admin") {
      setLoginState(false);
    } else {
      alert("your username or password is not correct!");
    }
  };

  const create = (e) => {
    e.preventDefault();
    createNewCar();
    openModal()
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  if (loginState === true) {
    return (
      <div className="px-10 py-[5rem] space-y-[2rem]">
        <div className="flex justify-center">
          <FaRegUserCircle size={60} />
        </div>
        <form
          className=" w-full md:w-2/3 mx-auto space-y-[1rem] flex flex-col justify-center"
          onSubmit={(e) => loginHandler(e)}
        >
          <label htmlFor="#">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <label htmlFor="#">
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <button
            type="submit"
            className="bg-black text-3xl text-white rounded-2xl w-full p-5 flex justify-center"
          >
            Login
          </button>
        </form>
      </div>
    );
  }
  if (loginState === false) {
    return (
      <>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          Succsess
        </Modal>
        <form
          action="#"
          onSubmit={create.bind(this)}
          className="container py-[3rem] grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <label htmlFor="#">
            <input
              type="text"
              id="carName"
              placeholder="Enter the car name"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <label htmlFor="#">
            <input
              type="number"
              id="year"
              placeholder="year"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <label htmlFor="#">
            <input
              type="number"
              id="price"
              placeholder="kilometer"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <label htmlFor="#">
            <input
              id="model"
              type="text"
              placeholder="price"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <label htmlFor="#">
            <input
              type="text"
              id="brand"
              placeholder="model"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <label htmlFor="#">
            <input
              type="file"
              id="file-input"
              className="border border-gray-300 p-4 rounded-2xl w-full text-[1.8rem]"
            />
          </label>
          <button
            type="submit"
            className="bg-black text-3xl text-white rounded-2xl w-full p-5 flex justify-center md:col-span-2"
          >
            Create
          </button>
        </form>
      </>
    );
  }
}

export default Login;
