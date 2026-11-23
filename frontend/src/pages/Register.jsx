import { useState } from "react"
import { Link } from "react-router"

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  function handleChange(e) {
    setUserData((prev) => { return { ...prev, [e.target.name]: e.target.value } })
  }

  return (
    <section className='mx-auto w-full max-w-xl px-4 py-6 sm:py-10 sm:min-h-full'>
      <div className='overflow-hidden rounded-2xl bg-base-100 shadow-sm p-5'>
        <h1 className='text-2xl font-bold'>Sign up</h1>
        <form className="fieldset bg-base-200 border-base-300 rounded-box border mt-5 p-4" >
          <p className="bg-error rounded-md py-1 px-2 font-semibold hidden">Error Message</p>
          <label className="label" htmlFor="name">Full Name</label>
          <input type="text" className="input w-full focus:outline-0" placeholder="Full Name" name="name" value={userData.name} onChange={handleChange} />

          <label className="label" htmlFor="email">Email</label>
          <input type="email" className="input w-full focus:outline-0" placeholder="Email" name="email" value={userData.email} onChange={handleChange} />

          <label className="label" htmlFor="password">Password</label>
          <input type="password" className="input w-full focus:outline-0" placeholder="Password" name="password" value={userData.password} onChange={handleChange} />

          <label className="label" htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" className="input w-full focus:outline-0" placeholder="Confirm Password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />

          <button type="submit" className="btn btn-neutral mt-4 mx-auto">Register</button>
          <p className="text-center">Already a user? <Link to={"/login"} className="text-blue-500 link">Sign In</Link></p>
        </form>
      </div>
    </section>
  )
}

  function handleChange(e) {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  return (
    <section className="mx-auto w-full max-w-xl px-4 py-12 text-center">
      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <form className="fieldset bg-base-200 border-base-300 rounded-box border my-2 p-4">
          <p className="bg-red-500 rounded-md p-2 font-bold hidden">
            Error Message
          </p>
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            className="input min-w-full outline-0"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />

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

          <label className="label" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            className="input min-w-full outline-0"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
          />

          <button className="btn btn-neutral mx-auto mt-4">Register</button>
          <p>Already a User? <Link to={"/login"} className="text-blue-500 link">Sign In</Link></p>
        </form>
      </div>
    </section>
  );
};

export default Register;
