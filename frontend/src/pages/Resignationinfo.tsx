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
import { useNavigate, useParams } from "react-router-dom";
import useResignation from "../hooks/useResignation";
import { api } from "../utils/axios";

const ResignationInfoPage = () => {
  const { id } = useParams();
  const { info } = useResignation(id || "");

  const docNameRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLSelectElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const surnameRef = useRef<HTMLInputElement>(null);
  const studentIDRef = useRef<HTMLInputElement>(null);
  const facultyRef = useRef<HTMLInputElement>(null);
  const departmentRef = useRef<HTMLInputElement>(null);
  const studySystemRef = useRef<HTMLSelectElement>(null);
  const telRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const semesterRef = useRef<HTMLSelectElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);
  const reasonRef = useRef<HTMLTextAreaElement>(null);
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setSubmitting(true);
    const docsName = docNameRef.current?.value;

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

    tmp = semesterRef.current?.value;
    const semester = tmp ? parseInt(tmp) : tmp;
    const year = yearRef.current?.value;
    const reason = reasonRef.current?.value;

    try {
      await sendresignationInfo(
        {
          docsName,
          title,
          name,
          surname,
          studentId,
          faculty,
          department,
          studySystem,
          tel,
          email,
          semester,
          year,
          reason,
        },
        id
      );
      toast.success("Save Succesfully!");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const saveDocs = async function () {
    const docsName = docNameRef.current?.value;

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

    tmp = semesterRef.current?.value;
    const semester = tmp ? parseInt(tmp) : tmp;

    const year = yearRef.current?.value;

    const reason = reasonRef.current?.value;

    await sendresignationInfo(
      {
        docsName,
        title,
        name,
        surname,
        studentId,
        faculty,
        department,
        studySystem,
        tel,
        email,
        semester,
        year,
        reason,
      },

      id
    );
  };

  let navigate = useNavigate();
  // async function geturl() {
  //   const res = await api.get(`/mydocuments/resignation/${id}/print`);
  //   return res.data["url"];
  // }

  const handlePrint = async function () {
    try {
      // prep print
      await saveDocs();
      // window.open('http://localhost:3001/mydocuments/resignation/' + id + '/print');
      window.open('https://cugetrekt-backend-lgnud3ncza-as.a.run.app/mydocuments/resignation/' + id + '/print');
      // navigate("/resigndone");
      // const printlink = await geturl();
      // window.open('http://' + printlink)
      // window.open(printlink);
      navigate("/resigndone");
      toast.success("Print Succesfully!");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main style={{ marginTop: "5em" }}>
      <Container>
        <Form onSubmit={handleSubmit}>
          <h1 className="heading d-flex justify-content-center mb-3">
            ?????????????????????????????????????????????
          </h1>
          <Container>
            <Col xs={2}>
              <Form.Group className="mb-3">
                <FloatingLabel label="??????????????????????????????">
                  <Form.Control
                    placeholder="??????????????????????????????"
                    defaultValue={info["docsName"]}
                    ref={docNameRef}
                    required
                  />
                </FloatingLabel>
              </Form.Group>
            </Col>
          </Container>
          <Container>
            <h3 className="mb-3">???????????????????????????????????????</h3>
            <Row className="mb-2">
              <Col xs={2}>
                <FloatingLabel label="????????????????????????">
                  <Form.Select required value={info["title"]} ref={titleRef}>
                    <option>??????????????????????????????????????????????????????</option>
                    <option value="1">?????????</option>
                    <option value="2">?????????</option>
                    <option value="3">??????????????????</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <FloatingLabel label="????????????" className="mb-3">
                    <Form.Control
                      placeholder="????????????"
                      ref={nameRef}
                      defaultValue={info["name"]}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <FloatingLabel label="?????????????????????" className="mb-3">
                    <Form.Control
                      placeholder="?????????????????????"
                      ref={surnameRef}
                      defaultValue={info["surname"]}
                      required
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
                  <FloatingLabel label="???????????????????????????">
                    <Form.Control
                      type="text"
                      placeholder="???????????????????????????"
                      minLength={10}
                      maxLength={10}
                      ref={studentIDRef}
                      defaultValue={info["studentId"]}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="?????????">
                    <Form.Control
                      type="text"
                      placeholder="?????????"
                      defaultValue={info["faculty"]}
                      ref={facultyRef}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="????????????">
                    <Form.Control
                      type="text"
                      placeholder="????????????"
                      defaultValue={info["department"]}
                      ref={departmentRef}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="mb-2">
              <Col>
                <FloatingLabel label="????????????????????????????????????">
                  <Form.Select
                    required
                    value={info["studySystem"]}
                    ref={studySystemRef}
                  >
                    <option>??????????????????????????????????????????????????????????????????</option>
                    <option value="1">??????????????????</option>
                    <option value="2">??????????????????-????????????????????????</option>
                    <option value="3">??????????????????</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Tel">
                  <FloatingLabel label="???????????????????????????????????????">
                    <Form.Control
                      type="Tel"
                      minLength={10}
                      maxLength={10}
                      placeholder="???????????????????????????????????????"
                      ref={telRef}
                      defaultValue={info["tel"]}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FloatingLabel label="??????????????????">
                    <Form.Control
                      type="email"
                      placeholder="??????????????????"
                      ref={emailRef}
                      defaultValue={info["email"]}
                      required
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
          </Container>

          <Container>
            <h3 className="mb-3">??????????????????????????????????????????</h3>
            <Row className="mb-2">
              <Col>
                <Form.Group className="mb-3">
                  <FloatingLabel label="?????????????????????????????????">
                    <Form.Select
                      required
                      value={info["semester"]}
                      ref={semesterRef}
                    >
                      <option value="">???????????????????????????????????????????????????????????????????????????????????????</option>
                      <option value="1">?????????</option>
                      <option value="2">????????????</option>
                    </Form.Select>
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <FloatingLabel label="??????????????????????????????">
                    <Form.Control
                      type="text"
                      placeholder="??????????????????????????????"
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
                  <h4 className="mb-2">????????????????????????????????????????????????</h4>
                </Form.Label>
                <Form.Control
                  maxLength={300}
                  required
                  as="textarea"
                  rows={2}
                  type="text"
                  ref={reasonRef}
                  defaultValue={info["reason"]}
                />
              </Form.Group>
            </Row>
            <div className="d-flex justify-content-end mb-3">
              <Button type="submit" size="lg" className="me-3">
                Save
              </Button>
              <Button onClick={handlePrint} size="lg">
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
