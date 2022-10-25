import "react-widgets/styles.css";
import Form from "react-bootstrap/Form";
import { Button, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import { FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";

import { useAuth } from "../Providers/AuthProvider";
import Loading from "../components/Loading";
import Error from "../components/Error";
import useInfo from "../hooks/useInfo";

import { sendInfo } from "../Providers/DataProvider";

const MyInfoPage = () => {
  const { isLoggedIn } = useAuth();
  const titleRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const facultyRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const studySystemRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  // const { loading, error, info } = useInfo()
  // const { name, surname } = info

  // FORDEV
  let { loading, error, info } = useInfo();
  loading = false;
  error = false;

  // let {
  //   title,
  //   name,
  //   surname,
  //   studentID,
  //   faculty,
  //   department,
  //   studySystem,
  //   tel,
  //   email,
  // } = info;

  // assume this is from api
  let Info = {
    title: 1,
    name: "tempname",
    surname: "tempsurname",
    studentID: "6532000021",
    faculty: "Engineering",
    department: "ComputerEN",
    studySystem: 1,
    tel: "0696969696",
    email: "temp@gmail.com",
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);
    const title = titleRef.current?.value;
    const name = nameRef.current?.value;
    const surname = surnameRef.current?.value;
    const studentID = studentIDRef.current?.value;
    const faculty = facultyRef.current?.value;
    const department = departmentRef.current?.value;
    const studySystem = studySystemRef.current?.value;
    const tel = telRef.current?.value;
    const email = emailRef.current?.value;

    try {
      await sendInfo({
        title,
        name,
        surname,
        studentID,
        faculty,
        department,
        studySystem,
        tel,
        email,
      });
      toast.success("Save Succesfully!");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ marginTop: "5em" }}>
      {!isLoggedIn ? (
        <Error message="Please Login First" />
      ) : loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Container>
          <Form onSubmit={handleSubmit}>
            <h1 className="d-flex justify-content-center mb-3">
              ข้อมูลส่วนตัว
            </h1>
            <Container>
              <Row className="mb-2">
                <Col xs={2}>
                  <FloatingLabel label="คำนำหน้า" ref={titleRef}>
                    <Form.Select defaultValue={Info["title"]}>
                      <option>กรุณาเลือกคำนำหน้า</option>
                      <option value="1">นาย</option>
                      <option value="2">นาง</option>
                      <option value="3">นางสาว</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <FloatingLabel label="ชื่อ" className="mb-3">
                      <Form.Control
                        placeholder="ชื่อ"
                        ref={nameRef}
                        defaultValue={Info["name"]}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <FloatingLabel label="นามสกุล" className="mb-3">
                      <Form.Control
                        placeholder="นามสกุล"
                        defaultValue={Info["surname"]}
                        ref={surnameRef}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="mb-2">
                <Col>
                  <Form.Group className="mb-3">
                    <FloatingLabel label="รหัสนิสิต">
                      <Form.Control
                        type="text"
                        placeholder="รหัสนิสิต"
                        minLength={10}
                        maxLength={10}
                        defaultValue={Info["studentID"]}
                        ref={studentIDRef}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <FloatingLabel label="คณะ">
                    <FormControl
                      defaultValue={Info["faculty"]}
                      placeholder="คณะ"
                      ref={facultyRef}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="สาขา">
                    <FormControl
                      defaultValue={Info["department"]}
                      placeholder="สาขา"
                      ref={departmentRef}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="mb-2">
                <Col>
                  <FloatingLabel label="ระบบการศึกษา" ref={studySystemRef}>
                    <Form.Select defaultValue={Info["studySystem"]}>
                      <option>กรุณาเลือกระบบการศึกษา</option>
                      <option value="1">ทวิภาค</option>
                      <option value="2">ทวิภาค-นานาชาติ</option>
                      <option value="3">ไตรภาค</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="Tel">
                    <FloatingLabel label="เบอร์โทรศัพท์">
                      <Form.Control
                        type="Tel"
                        minLength={10}
                        maxLength={10}
                        placeholder="เบอร์โทรศัพท์"
                        defaultValue={Info["tel"]}
                        ref={telRef}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <FloatingLabel label="อีเมล์">
                      <Form.Control
                        type="email"
                        placeholder="อีเมล์ (name@example.com)"
                        defaultValue={Info["email"]}
                        ref={emailRef}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-end mb-3">
                <Button type="submit" size="lg">
                  Save
                </Button>
              </div>
            </Container>
          </Form>
        </Container>
      )}
    </main>
  );
};

export default MyInfoPage;
