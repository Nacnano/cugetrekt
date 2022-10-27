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
  const titleRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const facultyRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const studySystemRef = useRef<HTMLSelectElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const { loading, error, info } = useInfo()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);

    let tmp = titleRef.current?.value;
    const title = tmp ? parseInt(tmp) : tmp;

    const name = nameRef.current?.value;
    const surname = surnameRef.current?.value;
    const studentId = studentIDRef.current?.value;
    const faculty = facultyRef.current?.value;
    const department = departmentRef.current?.value;

    tmp = studySystemRef.current?.value;
    const studySystem = tmp ? parseInt(tmp) : tmp;

    const tel = telRef.current?.value;
    const email = emailRef.current?.value;

    try {
      await sendInfo({
        title,
        name,
        surname,
        studentId,
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
                  <FloatingLabel label="คำนำหน้า">
                    <Form.Select value={info["title"]} ref={titleRef}>
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
                        defaultValue={info["name"]}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <FloatingLabel label="นามสกุล" className="mb-3">
                      <Form.Control
                        placeholder="นามสกุล"
                        defaultValue={info["surname"]}
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
                        defaultValue={info["studentId"]}
                        ref={studentIDRef}
                      />
                    </FloatingLabel>
                  </Form.Group>
                </Col>
                <Col>
                  <FloatingLabel label="คณะ">
                    <FormControl
                      defaultValue={info["faculty"]}
                      placeholder="คณะ"
                      ref={facultyRef}
                    />
                  </FloatingLabel>
                </Col>
                <Col>
                  <FloatingLabel label="สาขา">
                    <FormControl
                      defaultValue={info["department"]}
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
                  <FloatingLabel label="ระบบการศึกษา">
                    <Form.Select
                      value={info["studySystem"]}
                      ref={studySystemRef}
                    >
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
                        defaultValue={info["tel"]}
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
                        defaultValue={info["email"]}
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
