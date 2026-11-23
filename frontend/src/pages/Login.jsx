import { useState } from "react"
import { Link } from "react-router"

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  function handleChange(e) {
    setUserData((prev) => { return { ...prev, [e.target.name]: e.target.value } }) // This function updates the userData state with the new values from the input fields. It uses the previous state and spreads it, then updates the specific field that changed based on the name attribute of the input. 
  }

  return (
    <section className='mx-auto w-full max-w-xl px-4 py-6 sm:py-10 sm:min-h-full'>
      <div className='overflow-hidden rounded-2xl bg-base-100 shadow-sm p-5'>
        <h1 className='text-2xl font-bold'>Sign In</h1>
        <form className="fieldset bg-base-200 border-base-300 rounded-box border mt-5 p-4">
          <p className="bg-error rounded-md py-1 px-2 font-semibold hidden">Error Message</p>


          <label className="label" htmlFor="email" >Email</label>
          <input type="email" className="input w-full focus:outline-0" placeholder="Email" name="email" value={userData.email} onChange={handleChange} />

          <label className="label" htmlFor="password">Password</label>
          <input type="password" className="input w-full focus:outline-0" placeholder="Password" name="password" value={userData.password} onChange={handleChange} />

          <button type="submit" className="btn btn-neutral mt-4 mx-auto">Log In</button>
          <p className="text-center">Don't Have an Account? <Link to={"/register"} className="text-blue-500 link">Sign up</Link></p>
        </form>
      </div>
    </section>
  )
}

export default Login