import { useForm } from "react-hook-form";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Form from "react-bootstrap/Form";
import { Button, FloatingLabel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import { FormControl, FormGroup } from "@mui/material";
import InputGroup from "react-bootstrap/InputGroup";
import { FormEvent, useRef } from "react";
import { sendresignationInfo } from "../Providers/DataProvider";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ResignationInfoPage = () => {
  const { id } = useParams();
  console.log(id);
  const docNameRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const facultyRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const studySystemRef = useRef<HTMLInputElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const semesterRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  let Info = {
    docName: "tempdocname",
    title: 1,
    name: "tempname",
    surname: "tempsurname",
    studentID: "6532000021",
    faculty: "Engineering",
    department: "ComputerEN",
    studySystem: 1,
    tel: "0696969696",
    email: "temp@gmail.com",
    semester: "1",
    year: "2565",
    reason: "kuay",
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);
    const docName = docNameRef.current?.value;
    const title = titleRef.current?.value;
    const name = nameRef.current?.value;
    const surname = surnameRef.current?.value;
    const studentID = studentIDRef.current?.value;
    const faculty = facultyRef.current?.value;
    const department = departmentRef.current?.value;
    const studySystem = studySystemRef.current?.value;
    const tel = telRef.current?.value;
    const email = emailRef.current?.value;
    const semester = semesterRef.current?.value;
    const year = yearRef.current?.value;
    const reason = reasonRef.current?.value;

    try {
      await sendresignationInfo({
        docName,
        title,
        name,
        surname,
        studentID,
        faculty,
        department,
        studySystem,
        tel,
        email,
        semester,
        year,
        reason,
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
      <Container>
        <Form>
          <h1 className="heading d-flex justify-content-center mb-3">
            ข้อมูลในใบลาออก
          </h1>
          <Container>
            <Col xs={2}>
              <Form.Group className="mb-3">
                <FloatingLabel label="ชื่อเอกสาร">
                  <Form.Control
                    placeholder="ชื่อเอกสาร"
                    defaultValue={Info["docName"]}
                    ref={docNameRef}
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Container>
          <Container>
            <h3 className="mb-3">ข้อมูลส่วนตัว</h3>
            <Row className="mb-2">
              <Col xs={2}>
                <FloatingLabel label="คำนำหน้า" ref={titleRef}>
                  <Form.Select required defaultValue="1">
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
                      ref={surnameRef}
                      defaultValue={Info["surname"]}
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
                      ref={studentIDRef}
                      defaultValue={Info["studentID"]}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="คณะ">
                    <Form.Control
                      type="text"
                      placeholder="คณะ"
                      defaultValue={Info["faculty"]}
                      ref={facultyRef}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="คณะ">
                    <Form.Control
                      type="text"
                      placeholder="คณะ"
                      defaultValue={Info["department"]}
                      ref={departmentRef}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="mb-2">
              <Col>
                <FloatingLabel label="ระบบการศึกษา" ref={studySystemRef}>
                  <Form.Select required defaultValue={Info["studySystem"]}>
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
                      ref={telRef}
                      defaultValue={Info["tel"]}
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
                      placeholder="อีเมล์"
                      ref={emailRef}
                      defaultValue={Info["email"]}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Container>

          <Container>
            <h3 className="mb-3">ข้อมูลการศึกษา</h3>
            <Row className="mb-2">
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="ภาคการศึกษา" ref={semesterRef}>
                    <Form.Select required defaultValue={Info["semester"]}>
                      <option value="">กรุณาเลือกภาคการศึกษาปัจจุบัน</option>
                      <option value="1">ต้น</option>
                      <option value="2">ปลาย</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FloatingLabel label="ปีการศึกษา">
                    <Form.Control
                      type="text"
                      placeholder="ปีการศึกษา"
                      ref={yearRef}
                      defaultValue="2565"
                      disabled
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h4 className="mb-2">สาเหตุที่ขอลาออก</h4>
                </Form.Label>
                <Form.Control
                  maxLength={300}
                  required
                  as="textarea"
                  rows={2}
                  type="text"
                />
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-end mb-3">
              <Button type="submit" size="lg">
                Download PDF
              </Button>
            </div>
          </Container>
        </Form>
      </Container>
    </main>
  );
};
export default ResignationInfoPage;
