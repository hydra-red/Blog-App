import { useState } from "react"
import {Link} from "react-router"

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <section className="mx-auto w-full max-w-xl px-4 py-12 text-center">
      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form className="fieldset bg-base-200 border-base-300 rounded-box border my-2 p-4">
          <p className="bg-red-500 rounded-md p-2 font-bold hidden">
            Error Message
          </p>

          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            className="input min-w-full outline-0"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />

          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="input min-w-full outline-0"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />

          <button className="btn btn-neutral mx-auto mt-4">Log In</button>
          <p>Don't have an Account? <Link to={"/register"} className="text-blue-500 link">Sign In</Link></p>
        </form>
      </div>
    </section>
  );
}

export default Login