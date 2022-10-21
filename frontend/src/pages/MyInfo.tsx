import { useForm } from "react-hook-form";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

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
          <h1 className="heading"> ข้อมูลส่วนตัว </h1>
          <Container>
            <Row>
              <Col xs={2}>
                {/* <DropdownList
                defaultValue="คำนำหน้า"
                data={["นาย", "นาง", "นางสาว"]}
              /> */}
                <Form.Select>
                  <option>คำนำหน้า</option>
                  <option value="1">นาย</option>
                  <option value="2">นาง</option>
                  <option value="3">นางสาว</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="Name" placeholder="ชื่อ" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Control type="Name" placeholder="นามสกุล" />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="รหัสนิสิต"
                    minLength={10}
                    maxLength={10}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Select>
                  <option>คณะ</option>
                  <option value="1">วิศวกรรมศาสตร์</option>
                  <option value="2">วิทยา</option>
                  <option value="3">ฟสกด่่ืเฟหด่ิยวฟ</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Select>
                  <option>สาขา</option>
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
                <Form.Select>
                  <option>ระบบการศึกษา</option>
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
                    placeholder="อีเมล์ (name@example.com)"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default MyInfoPage;
