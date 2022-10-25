import { useForm } from "react-hook-form";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import { FormControl, FormGroup } from "@mui/material";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { FormEvent, useRef } from "react";
import { sendwithdrawalInfo } from "../Providers/DataProvider";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const WithdrawInfoPage = () => {
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
  const gpaxRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLInputElement>(null);
  const creditRef = useRef<HTMLInputElement>(null);
  const course1Ref = useRef<HTMLInputElement>(null);
  const course2Ref = useRef<HTMLInputElement>(null);
  const course3Ref = useRef<HTMLInputElement>(null);
  const reason1Ref = useRef<HTMLInputElement>(null);
  const reason2Ref = useRef<HTMLInputElement>(null);
  const reason3Ref = useRef<HTMLInputElement>(null);
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
    gpax: "69",
    status: "1",
    credit: "420",
    course1: "222222",
    course2: "222222",
    course3: "222222",
    reason1: "kuay",
    reason2: "kuay",
    reason3: "kuay",
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
    const gpax = gpaxRef.current?.value;
    const status = statusRef.current?.value;
    const credit = creditRef.current?.value;
    const course1 = course1Ref.current?.value;
    const course2 = course2Ref.current?.value;
    const course3 = course3Ref.current?.value;
    const reason1 = reason1Ref.current?.value;
    const reason2 = reason2Ref.current?.value;
    const reason3 = reason3Ref.current?.value;

    try {
      await sendwithdrawalInfo({
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
        gpax,
        status,
        credit,
        course1,
        course2,
        course3,
        reason1,
        reason2,
        reason3,
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
            ข้อมูลในใบถอนรายวิชา
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
                  <FloatingLabel label="สาขา">
                    <Form.Control
                      type="text"
                      placeholder="สาขา"
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
              <Col>
                <Form.Group className="mb-3" controlId="grade">
                  <FloatingLabel label="GPAX">
                    <Form.Control
                      type="text"
                      placeholder="GPAX"
                      required
                      ref={gpaxRef}
                      defaultValue={Info["gpax"]}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="mb-2">
              <Col>
                <FloatingLabel label="สถานภาพการเป็นนิสิต" ref={statusRef}>
                  <Form.Select required defaultValue={Info["status"]}>
                    <option value="1">ปกติ</option>
                    <option value="2">วิทยาทัณฑ์ครั้งที่ 1</option>
                    <option value="2">วิทยาทัณฑ์ครั้งที่ 2</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>

              <Col>
                <InputGroup className="mb-3">
                  {/* <InputGroup.Text>ปัจจุบันลงเรียนไว้</InputGroup.Text> */}
                  <FloatingLabel label="ปัจจุบันลงเรียนไว้ทั้งหมด">
                    <Form.Control
                      type="number"
                      required
                      placeholder="ปัจจุบันลงเรียนไว้ทั้งหมด"
                      ref={creditRef}
                      defaultValue={Info["credit"]}
                    />
                  </FloatingLabel>
                  <InputGroup.Text
                    className="d-flex justify-content-center"
                    style={{ width: "5em" }}
                  >
                    หน่วยกิต
                  </InputGroup.Text>
                  {/* <FloatingLabel label="รวมทั้งหมด">
                    <Form.Control
                      type="number"
                      required
                      placeholder="รวมทั้งหมด"
                      step="0.5"
                    />
                  </FloatingLabel> */}
                  {/* <InputGroup.Text style={{ width: "5em" }}>
                    หน่วยกิต
                  </InputGroup.Text> */}
                </InputGroup>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <h3>รหัสวิชาที่ต้องการถอน</h3>
              </Col>
              <Col>
                <h3 className="mb-2">เหตุผลที่ต้องการถอน</h3>
              </Col>
            </Row>
            <Row className="mb-2">
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text style={{ width: "5em" }}>
                    วิชาที่ 1
                  </InputGroup.Text>
                  <FloatingLabel label="รหัสวิชา">
                    <Form.Control
                      ref={course1Ref}
                      defaultValue={Info["course1"]}
                      type="text"
                      required
                      placeholder="รหัสวิชา"
                    />
                  </FloatingLabel>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text style={{ width: "5em" }}>
                    วิชาที่ 2
                  </InputGroup.Text>
                  <FloatingLabel label="รหัสวิชา">
                    <Form.Control
                      type="text"
                      placeholder="รหัสวิชา"
                      ref={course2Ref}
                      defaultValue={Info["course2"]}
                    />
                  </FloatingLabel>
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text style={{ width: "5em" }}>
                    วิชาที่ 3
                  </InputGroup.Text>
                  <FloatingLabel label="รหัสวิชา">
                    <Form.Control
                      type="text"
                      placeholder="รหัสวิชา"
                      ref={course3Ref}
                      defaultValue={Info["course3"]}
                    />
                  </FloatingLabel>
                </InputGroup>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="เหตุผลวิชาที่ 1">
                    <Form.Control
                      type="text"
                      placeholder="เหตุผลวิชาที่ 1"
                      required
                      ref={reason1Ref}
                      defaultValue={Info["reason1"]}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel label="เหตุผลวิชาที่ 2">
                    <Form.Control
                      type="text"
                      placeholder="เหตุผลวิชาที่ 2"
                      ref={reason2Ref}
                      defaultValue={Info["reason2"]}
                    />
                  </FloatingLabel>
                </Form.Group>
                <Form.Group className="mb-3">
                  <FloatingLabel label="เหตุผลวิชาที่ 3">
                    <Form.Control
                      type="text"
                      placeholder="เหตุผลวิชาที่ 3"
                      ref={reason3Ref}
                      defaultValue={Info["reason3"]}
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container className="d-flex justify-content-end mb-3">
            <Button type="submit" size="lg" className="me-3">
              Save
            </Button>
            <Button type="submit" size="lg">
              Download PDF
            </Button>
          </Container>
        </Form>
      </Container>
    </main>
  );
};

export default WithdrawInfoPage;
