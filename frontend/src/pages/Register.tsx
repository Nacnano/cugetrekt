import { FormEvent, useRef, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Providers/AuthProvider";
import { ErrorDto } from "../types/dto";
import { api } from "../utils/axios";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const passwordConfirm = passwordConfirmRef.current?.value;

    if (!email || !password || !passwordConfirm) {
      toast.error("Please complete the form");
      setSubmitting(false);
      return;
    }

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match");
      setSubmitting(false);
      return;
    }

    try {
      await api.post(`/myinfo`, {
        email,
        password,
      });
      toast.success("Account created!");
      navigate("/login");
    } catch (err) {
      if (err instanceof AxiosError) {
        const { response } = err as AxiosError<ErrorDto>;
        const message = response?.data.message;
        toast.error(message || "Something went wrong");
        return;
      }
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (isLoggedIn) return <Navigate to="/" />;
  return (
    <main style={{ marginTop: "5em" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <form onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 fw-normal text-center">สมัครใช้บริการ</h1>
              <div className="form-floating my-3 form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  ref={emailRef}
                />
                {/* Label must be below Field and Error Message */}
                <label htmlFor="email">Email </label>
              </div>

              {/* Password Form */}
              <div className="form-floating my-3 form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  id="password"
                  ref={passwordRef}
                />
                <label htmlFor="password">Password</label>
              </div>

              {/* Confirmation Password Form */}
              <div className="form-floating my-3 form-group">
                <input
                  type="password"
                  className="form-control"
                  id="conPassword"
                  placeholder="password"
                  ref={passwordConfirmRef}
                />
                <label htmlFor="conPassword">Confirm Password</label>
              </div>
              <button
                className="w-100 btn btn-lg btn-danger"
                type="submit"
                disabled={isSubmitting}
              >
                สมัครใช้บริการ
              </button>
            </form>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link className="text-dark" to="/Login">
              เข้าสู่ระบบ
            </Link>
            <h5 className="mt-5">" ปุ่มถอนอยู่ใกล้เพียงแค่เอื้อมมือ "</h5>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
