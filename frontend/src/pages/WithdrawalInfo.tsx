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

const WithdrawInfoPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <main style={{ marginTop: "5em" }}>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="heading"> ข้อมูลในใบถอนรายวิชา </h1>
          <Container>
            <Row>
              <Col xs={2}>
                <Form.Select required>
                  <option value="">คำนำหน้า</option>
                  <option value="1">นาย</option>
                  <option value="2">นาง</option>
                  <option value="3">นางสาว</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="Name" placeholder="ชื่อ" required />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="Name" placeholder="นามสกุล" required />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  {/* input type="text" placeholder="First name" {...register("First name", {required: true, min: 10, maxLength: 9})} */}
                  <Form.Control
                    type="text"
                    minLength={10}
                    maxLength={10}
                    required
                    placeholder="รหัสนิสิต"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select required>
                  <option value="">คณะ</option>
                  <option value="1">วิศวกรรมศาสตร์</option>
                  <option value="2">วิทยา</option>
                  <option value="3">ฟสกด่่ืเฟหด่ิยวฟ</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select required>
                  <option value="">สาขา</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <Form.Select required>
                  <option value="">ระบบการศึกษา</option>
                  <option value="1">ทวิภาค</option>
                  <option value="2">ทวิภาค-นานาชาติ</option>
                  <option value="3">ไตรภาค</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="Tel">
                  <Form.Control
                    type="Tel"
                    minLength={10}
                    maxLength={10}
                    required
                    placeholder="เบอร์โทรศัพน์"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Control
                    type="email"
                    required
                    placeholder="อีเมล์ (name@example.com)"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <Form.Select required>
                  <option value=""> ภาคการศึกษา</option>
                  <option value="1">ต้น</option>
                  <option value="2">ปลาย</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="yrs">
                  <Form.Control
                    type="number"
                    placeholder="ปีการศึกษา"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="grade">
                  <Form.Control
                    type="number"
                    step="0.01"
                    placeholder="GPAX"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <Form.Select required>
                  <option value="">สถานภาพการเป็นนิสิต</option>
                  <option value="1">ปกติ</option>
                  <option value="2">วิทยาทัณฑ์ครั้งที่ 1</option>
                  <option value="2">วิทยาทัณฑ์ครั้งที่ 2</option>
                </Form.Select>
              </Col>

              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text>ปัจจุบันลงเรียนไว้</InputGroup.Text>
                  <Form.Control
                    type="number"
                    required
                    placeholder="XX"
                    aria-label="subj"
                  />
                  <InputGroup.Text>วิชา</InputGroup.Text>
                  <Form.Control
                    type="number"
                    required
                    placeholder="XX"
                    aria-label="credit"
                  />
                  <InputGroup.Text>หน่วยกิต</InputGroup.Text>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <h3>รหัสวิชาที่ต้องการถอน</h3>
            </Row>
            <Row>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text style={{ width: "5em" }}>
                    วิชาที่ 1
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    required
                    placeholder="XXXXXXX"
                    aria-label="subjID"
                  />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Text style={{ width: "5em" }}>
                    วิชาที่ 2
                  </InputGroup.Text>
                  <Form.Control
                    type="number"
                    placeholder="XXXXXXX"
                    aria-label="subjID"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mb-3">
                <Form.Label>
                  <h4>เหตุผลที่ต้องการถอน</h4>
                </Form.Label>
                <Form.Control maxLength={200} required as="textarea" rows={2} />
              </Form.Group>
            </Row>
          </Container>
          <Button variant="primary" type="submit">
            Download PDF
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default WithdrawInfoPage;
