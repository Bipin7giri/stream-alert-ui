"use client";
import { Button, Form, Input, Modal, Select, Upload } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { GIF } from "@/data/gif.data";
import Image from "next/image";
import { dev_base_url, img_base_url } from "@/constants/baseurl";
const Page = () => {
  // modal
  const [image, setImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
          className="grid grid-cols-2 gap-4 p-12"
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
            className="font-manrope font-semibold text-[13px] col-span-1"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Select placeholder="Text Animation" className="w-[100%] h-[41px]">
              <Option value="">Fade</Option>
              <Option value="">Fade</Option>
              <Option value="">Fade</Option>
              <Option value="">Fade</Option>
              <Option value="">Fade</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            className="font-manrope font-semibold text-[13px] col-span-1"
            rules={[{ required: true, message: "Please Upload Image" }]}
          >
            <div
              onClick={() => {
                showModal();
              }}
            >
              <div className="w-full">
                <Button icon={<UploadOutlined />}>Upload</Button>
              </div>
            </div>
          </Form.Item>
        </Form>
      </div>

      <Modal
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <div>
          <div className="flex justify-between items-center flex-wrap">
            {GIF.map((item, id) => {
              return (
                <div
                  onClick={() => {
                    setImage(item);
                    handleCancel();
                  }}
                  className="bg-gray-500 rounded-xl hover:shadow-lg hover:cursor-pointer"
                  key={id}
                >
                  <img
                    src={img_base_url + item}
                    alt={"gif"}
                    key={item}
                    width={100}
                    height={100}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Upload className="w-full">
              <Button icon={<UploadOutlined />}>Upload Yours</Button>
            </Upload>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
