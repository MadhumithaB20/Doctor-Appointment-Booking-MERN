import React from "react";
import { Col, Form, Input, Row, TimePicker, Button } from "antd";
import "../index.css";
import moment from "moment";
function DoctorForm({onFinish,initialValues}) {
 
  return (
    <>
     <Form
        layout="vertical"
        onFinish={onFinish} 
       initialValues={{...initialValues,
        ...(initialValues &&{
           timings: [
          moment(initialValues?.timings[0],"HH:mm"),
          moment(initialValues?.timings[1],"HH:mm")
        ]
        } )
       }
      }
      >
        <h1 className="card-title mt-3">Personal Information</h1>
        <Row gutter={20}>
          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="firstName"
              label="First Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter you First Name" />
            </Form.Item>
          </Col>
          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="lastName"
              label="Last Name"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter you Last Name" />
            </Form.Item>
          </Col>

          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="mobileNumber"
              label="Mobile Number"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter you phone" />
            </Form.Item>
          </Col>
          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="address"
              label="Address"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter Address" />
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <h1 className="card-title mt-3">Proffesional Information</h1>
        <Row gutter={20}>
          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="specialization"
              label="Specialization"
              rules={[{ required: true }]}
            >
              <Input placeholder="Enter you specialization" />
            </Form.Item>
          </Col>
          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="experience"
              label="Experience"
              rules={[{ required: true }]}
            >
              <Input min={0} placeholder="Enter you experience" type="number" />
            </Form.Item>
          </Col>

          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="feePerConsultation"
              label="Fee per Consultation"
              rules={[{ required: true }]}
            >
              <Input min={0} placeholder="Enter Fee Per Consultation" type="number" />
            </Form.Item>
          </Col>
          <Col lg={8} span={8} xs={24} sm={24}>
            <Form.Item
              required
              name="timings"
              label="Timing"
              rules={[{ required: true }]}
            >
              <TimePicker.RangePicker format='HH:mm' />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-end ">
          <Button className="primary-button-apply" htmlType="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </>
  );
}

export default DoctorForm;
