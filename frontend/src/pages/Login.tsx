import React, { useState } from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Link } from 'react-router-dom'
import { login } from '../services/auth.service'

type Props = {}

const Login: React.FC<Props> = () => {
  let navigate: NavigateFunction = useNavigate()

  const [loading, setLoading] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const initialValues: {
    email: string
    password: string
  } = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  })

  const handleLogin = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue

    setMessage('')
    setLoading(true)

    login(email, password).then(
      () => {
        navigate('/MyDocuments')
        // window.location.reload()
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()

        setLoading(false)
        setMessage(resMessage)
      },
    )
  }

  return (
    <main style={{ marginTop: '5em' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-3">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <h1 className="h3 mb-3 fw-normal text-center form-group">
                  เข้าสู่ระบบ
                </h1>
                <div className="form-floating my-3">
                  <Field
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    name="email"
                    placeholder="name@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="alert alert-danger"
                  />
                  <label htmlFor="floatingInput">Email </label>
                </div>

                <div className="form-floating my-3">
                  <Field
                    name="password"
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert alert-danger"
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-danger" type="submit">
                  เข้าสู่ระบบ
                </button>

                {message && (
                  <div className="form-group">
                    <div className="alert alert-danger" role="alert">
                      {message}
                    </div>
                  </div>
                )}
              </Form>
            </Formik>
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
  // return (
  //   <div className="col-md-12">
  //     <div className="card card-container">
  //       <Formik
  //         initialValues={initialValues}
  //         validationSchema={validationSchema}
  //         onSubmit={handleLogin}
  //       >
  //         <Form>
  //           <div className="form-group">
  //             <label htmlFor="username">Username</label>
  //             <Field name="username" type="text" className="form-control" />
  //             <ErrorMessage
  //               name="username"
  //               component="div"
  //               className="alert alert-danger"
  //             />
  //           </div>

  //           <div className="form-group">
  //             <label htmlFor="password">Password</label>
  //             <Field name="password" type="password" className="form-control" />
  //             <ErrorMessage
  //               name="password"
  //               component="div"
  //               className="alert alert-danger"
  //             />
  //           </div>

  //           <div className="form-group">
  //             <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
  //               {loading && (
  //                 <span className="spinner-border spinner-border-sm"></span>
  //               )}
  //               <span>Login</span>
  //             </button>
  //           </div>

  //           {message && (
  //             <div className="form-group">
  //               <div className="alert alert-danger" role="alert">
  //                 {message}
  //               </div>
  //             </div>
  //           )}
  //         </Form>
  //       </Formik>
  //     </div>
  //   </div>
  // );
}

export default Login
