import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Axios from 'axios';

const LoginPage = () => {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  // backend url
  const loginUrl = "http://localhost:3001/login";

  const login = () => {
    // console.log(emailLogin, passwordLogin);
    Axios.post(loginUrl, {
      email: emailLogin,
      password: passwordLogin,
    }).then((res) => {
      if (res.data.message) {
        setLoginStatus(res.data.message);
      }
    });
  }

  return (
    <main style={{ marginTop: "5em" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <form onSubmit={login}>
              <h1 className="h3 mb-3 fw-normal text-center">เข้าสู่ระบบ</h1>
              <div className="form-floating my-3">
                <input type="email" required className="form-control" id="floatingInput" placeholder="name@example.com"
                  onChange={ (e) => {
                    setEmailLogin(e.target.value);
                  }} />
                <label htmlFor="floatingInput">Email </label>
              </div>
              <div className="form-floating my-3">
                <input type="password" required className="form-control" id="floatingPassword" placeholder="Password" 
                  onChange={ (e) => {
                    setPasswordLogin(e.target.value);
                  }} />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">เข้าสู่ระบบ</button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link className="text-dark" to="/Register">สมัครใช้บริการ</Link>
            <h5 className="mt-5">" ปุ่มถอนอยู่ใกล้เพียงแค่เอื้อมมือ "</h5>
          </div>
        </div>
        {/* <h1>
          {loginStatus}
        </h1> */}
      </div>
    </main >
  );
}

export default LoginPage;
