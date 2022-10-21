import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Link } from 'react-router-dom'
import IUser from '../types/user.type'
import { register } from '../services/auth.service'

const Register: React.FC = () => {
  const [successful, setSuccessful] = useState<boolean>(false)
  const [message, setMessage] = useState<string>('')

  const initialValues: IUser = {
    email: '',
    password: '',
    conPassword: '',
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val: any) =>
          val && val.toString().length >= 6 && val.toString().length <= 40,
      )
      .required('This field is required!'),
    conPassword: Yup.string()
      .test('passwords-match', 'Password must match.', function (val: any) {
        return (
          val && this.parent.password && val.toString() == this.parent.password
        )
      })
      .required('This field is required!'),
  })

  const handleRegister = (formValue: IUser) => {
    const { email, password } = formValue

    register(email, password).then(
      (response) => {
        setMessage(response.data.message)
        setSuccessful(true)
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()

        setMessage(resMessage)
        setSuccessful(false)
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
              onSubmit={handleRegister}
            >
              <Form>
                <h1 className="h3 mb-3 fw-normal text-center">
                  สมัครใช้บริการ
                </h1>

                {!successful && (
                  <>
                    {/* Email Form */}
                    <div className="form-floating my-3 form-group">
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
                      {/* Label must be below Field and Error Message */}
                      <label htmlFor="email">Email </label>
                    </div>

                    {/* Password Form */}
                    <div className="form-floating my-3 form-group">
                      <Field
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="password"
                        id="password"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="alert alert-danger"
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    {/* Confirmation Password Form */}
                    <div className="form-floating my-3 form-group">
                      <Field
                        type="password"
                        className="form-control"
                        id="conPassword"
                        placeholder="password"
                        name="conPassword"
                      />
                      <ErrorMessage
                        name="conPassword"
                        component="div"
                        className="alert alert-danger"
                      />
                      <label htmlFor="conPassword">Confirm Password</label>
                    </div>
                    <button
                      className="w-100 btn btn-lg btn-danger"
                      type="submit"
                    >
                      สมัครใช้บริการ
                    </button>
                  </>
                )}
                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful
                          ? 'alert alert-success'
                          : 'alert alert-danger'
                      }
                      role="alert"
                    >
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
            <Link className="text-dark" to="/Login">
              เข้าสู่ระบบ
            </Link>
            <h5 className="mt-5">" ปุ่มถอนอยู่ใกล้เพียงแค่เอื้อมมือ "</h5>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Register
