import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main style={{ marginTop: "5em" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <form>
              <h1 className="h3 mb-3 fw-normal text-center">เข้าสู่ระบบ</h1>
              <div className="form-floating my-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email </label>
              </div>
              <div className="form-floating my-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-danger" type="submit">เข้าสู่ระบบ</button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link className="text-dark" to="/Register">สมัครใช้บริการ</Link>
            <h5 className="mt-5">" ปุ่มถอนอยู่ใกล้เพียงแค่เอื้อมมือ "</h5>
          </div>
        </div>
      </div>
    </main >
  );
}

export default LoginPage;
