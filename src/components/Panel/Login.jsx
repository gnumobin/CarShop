import React from "react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Panel from "./Panel";

function Login() {
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
    return <Panel />;
  }
}

export default Login;
