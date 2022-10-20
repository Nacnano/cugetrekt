import { Link } from "react-router-dom";

const RegisterPage = () => {

  return (
    <main style={{ marginTop: "5em" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <form>
              <h1 className="h3 mb-3 fw-normal text-center">สมัครใช้บริการ</h1>
              <div className="form-floating my-3">
                <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email </label>
              </div>
              <div className="form-floating my-3">
                <input type="password" className="form-control" name="Password" placeholder="password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="form-floating my-3">
                <input type="password" className="form-control" id="cPassword" placeholder="password" />
                <label htmlFor="floatingPassword">Confirm Password</label>
              </div>
              <button className="w-100 btn btn-lg btn-primary" type="submit">สมัครใช้บริการ</button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link className="text-dark" to="/Login">เข้าสู่ระบบ</Link>
            <h5 className="mt-5">" ปุ่มถอนอยู่ใกล้เพียงแค่เอื้อมมือ "</h5>
          </div>
        </div>
      </div>
    </main >
  );
}

export default RegisterPage;
