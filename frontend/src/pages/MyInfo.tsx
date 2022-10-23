import { useForm } from "react-hook-form";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Form from "react-bootstrap/Form";
import { Button, FormControl } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const MyInfoPage = () => {
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
          <Row className="d-flex justify-content-start">
            <Col>
              <Button size="lg">
                {/* // add type later */}
                Back
              </Button>

              <h1 className="d-flex justify-content-center mb-3 ">
                ข้อมูลส่วนตัว
              </h1>
            </Col>
          </Row>

          <Container>
            <Row className="mb-2">
              <Col xs={2}>
                <FloatingLabel label="คำนำหน้า">
                  <Form.Select>
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
                    <Form.Control placeholder="ชื่อ" />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <FloatingLabel label="นามสกุล" className="mb-3">
                    <Form.Control placeholder="นามสกุล" />
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
                    />
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col>
                <FloatingLabel label="คณะ">
                  <FormControl placeholder="คณะ" type="text" />
                  {/* <Form.Select>
                    <option value="">กรุณาเลือกคณะที่กำลังศึกษา</option>
                    <option value="1">วิศวกรรมศาสตร์</option>
                    <option value="2">วิทยา</option>
                    <option value="3">ฟสกด่่ืเฟหด่ิยวฟ</option>
                  </Form.Select> */}
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel label="สาขา">
                  <FormControl placeholder="สาขา" type="text" />
                  {/* <Form.Select>
                    <option>กรุณาเลือกสาขาที่กำลังศึกษา</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </Form.Select> */}
                </FloatingLabel>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className="mb-2">
              <Col>
                <FloatingLabel label="ระบบการศึกษา">
                  <Form.Select>
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
    </main>
  );
};

export default MyInfoPage;
