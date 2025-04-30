import React from "react";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();

  const loginHandler = (e) => {
    function _0x58b7(){const _0x423bc3=['admin','login','username','location','1587416eKhHFq','6eweJxU','4416450TrHvvz','753426yeCarD','97990ToVkpw','2702106DZqAYP','replace','password','323241SrEgSf','manage','preventDefault','16464IrvtGU','40ZaJFnF','Your\x20username\x20or\x20password\x20is\x20not\x20correct!','log','33uvrVWg','14hozbCs'];_0x58b7=function(){return _0x423bc3;};return _0x58b7();}function _0x12cb(_0x5107ff,_0xbb3472){const _0x58b7e3=_0x58b7();return _0x12cb=function(_0x12cb91,_0x40a8c1){_0x12cb91=_0x12cb91-0x89;let _0x432eb8=_0x58b7e3[_0x12cb91];return _0x432eb8;},_0x12cb(_0x5107ff,_0xbb3472);}const _0x3fd77e=_0x12cb;(function(_0x336340,_0x515490){const _0x4132e1=_0x12cb,_0x1c8833=_0x336340();while(!![]){try{const _0x4d4ab6=parseInt(_0x4132e1(0x96))/0x1*(parseInt(_0x4132e1(0x8f))/0x2)+parseInt(_0x4132e1(0x93))/0x3+parseInt(_0x4132e1(0x99))/0x4*(-parseInt(_0x4132e1(0x9a))/0x5)+-parseInt(_0x4132e1(0x90))/0x6+-parseInt(_0x4132e1(0x89))/0x7*(parseInt(_0x4132e1(0x8e))/0x8)+-parseInt(_0x4132e1(0x91))/0x9+-parseInt(_0x4132e1(0x92))/0xa*(parseInt(_0x4132e1(0x9d))/0xb);if(_0x4d4ab6===_0x515490)break;else _0x1c8833['push'](_0x1c8833['shift']());}catch(_0x509f0f){_0x1c8833['push'](_0x1c8833['shift']());}}}(_0x58b7,0x90661));const account={'username':username,'password':password};e[_0x3fd77e(0x98)]();account[_0x3fd77e(0x8c)]===_0x3fd77e(0x8a)&&account[_0x3fd77e(0x95)]===_0x3fd77e(0x8a)?(window[_0x3fd77e(0x8d)][_0x3fd77e(0x94)](_0x3fd77e(0x97)),console[_0x3fd77e(0x9c)](_0x3fd77e(0x8b))):alert(_0x3fd77e(0x9b));
  };
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

export default Login;
