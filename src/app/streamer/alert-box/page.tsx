"use client";
import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import React from "react";

const page = async () => {
  const onFinish = () => {};
  return (
    <div>
      <div className="bg-background p-8 rounded-xl">
        <div className="flex items-center justify-around">
          <h1>Alert Box</h1>
          <div className="flex gap-4 items-center">
            <Input defaultValue={"http://localhost:8000"} />
            <div className="flex justify-between gap-3 items-center">
              <Button size="large" className="bg-primary text-white">
                Copy
              </Button>
              <Button size="large" className="bg-primary-2">
                Test
              </Button>
            </div>
          </div>
        </div>
        <Form
          onFinish={onFinish}
          layout="vertical"
          className="grid grid-cols-2 gap-4"
        >
          <Form.Item
            label="Message Template"
            name="messageTemplate"
            className="font-manrope font-semibold text-[13px] col-span-1"
            rules={[
              {
                required: true,
                message: "Please enter your message template!",
              },
            ]}
          >
            <Input
              defaultValue={
                "${alertMessage.username} tipped rs ${alertMessage.amount}"
              }
              placeholder="Full Name"
              className="py-2"
            />
          </Form.Item>
          <Form.Item
            label="Text Animation"
            name="textAnimation"
            className="font-manrope font-semibold h-[48px] text-[13px] col-span-1"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Select placeholder="Full Name" className="py-2 h-[48px]">
              <Option value="">{}</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Full Name"
            name="fullName"
            className="font-manrope font-semibold text-[13px] col-span-1"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input placeholder="Full Name" className="py-2" />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default page;
