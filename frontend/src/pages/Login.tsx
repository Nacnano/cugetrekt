import { FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../Providers/AuthProvider';

type Props = {}

const Login: React.FC<Props> = () => {
  const navigate = useNavigate()
  const { isLoggedIn, login } = useAuth()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [isSubmitting, setSubmitting] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    setSubmitting(true)

    const email = emailRef.current?.value
    const password = passwordRef.current?.value

    if (!email || !password) {
      toast.error('Please enter email and password')
      setSubmitting(false)
      return
    }

    try {
      await login(email, password)
      toast.success('Log in successfully!')
      navigate('/MyDocuments')
    } catch (err) {
      if (err instanceof Error) {
        toast.error(err.message)
        return
      }
      toast.error('Something went wrong')
    } finally {
      setSubmitting(false)
    }
  }

  if (isLoggedIn) return <Navigate to="/MyDocuments" />;
  return (
    <main style={{ marginTop: '5em' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
              <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal text-center form-group">
                  เข้าสู่ระบบ
                </h1>
                <div className="form-floating my-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    placeholder="name@example.com"
                    ref={emailRef}
                  />
                  <label htmlFor="floatingInput">Email </label>
                </div>

                <div className="form-floating my-3">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-danger" type="submit" disabled={isSubmitting}>
                  เข้าสู่ระบบ
                </button>
              </form>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-3 text-center">
            <Link className="text-dark" to="/Register">
              สมัครใช้บริการ
            </Link>
            <h5 className="mt-5">" ปุ่มถอนอยู่ใกล้เพียงแค่เอื้อมมือ "</h5>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login;
