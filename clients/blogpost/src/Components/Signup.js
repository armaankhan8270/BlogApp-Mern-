import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";

const Signup = () => {
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [After, setAfter] = useState(false);
  const Register = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/user/register";
    const RegisterData = { username, password, email };
    await axios
      .post(url, RegisterData)
      .then((e) => {
        if (e.status === 203) {
          setAfter(true);
          console.log(e);
          alert("welcome" + e.data.username);
        } else {
        }
        // alert("");
        alert(e.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div>
      {!After ? (
        <div class="bg-slate-800 min-h-screen flex flex-col">
          <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-slate-900 px-6 py-8 rounded shadow-md text-white w-full">
              <h1 class="mb-8 text-3xl text-center">Sign up</h1>
              <form onSubmit={Register}>
                <input
                  type="text"
                  class="block bg-slate-900 border-b border-grey-light focus:outline-none w-full p-3 rounded mb-4 "
                  name="fullname"
                  placeholder="UserName"
                  value={username}
                  required={true}
                  onChange={(e) => setusername(e.target.value)}
                />

                <input
                  type="text"
                  class="block bg-slate-900 border-b border-grey-light focus:outline-none w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                  value={email}
                  required={true}
                  onChange={(e) => setemail(e.target.value)}
                />

                <input
                  type="password"
                  class="block bg-slate-900 border-b border-grey-light focus:outline-none w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  value={password}
                  required={true}
                  onChange={(e) => setpassword(e.target.value)}
                />

                <button
                  // onClick={Register}
                  type="submit"
                  class="w-full text-center py-3 rounded bg-cyan-900 text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Create Account
                </button>
              </form>

              <div class="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  class="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div class="text-white   mt-6">
              Already have an account?
              <a
                class="no-underline text-white border-b border-blue text-blue"
                href="/login"
              >
                Log in
              </a>
              .
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Signup;
