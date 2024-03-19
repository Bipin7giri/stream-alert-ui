"use client";
import {
  Button,
  ColorPicker,
  Form,
  Input,
  Modal,
  Select,
  Slider,
  Upload,
  message,
  notification,
} from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { GIF } from "@/data/gif.data";
import Image from "next/image";
import { dev_base_url, img_base_url } from "@/constants/baseurl";
import { BsFileFont } from "react-icons/bs";
import { getCookie } from "cookies-next";
const defaultMessageTemplate =
  "${alertMessage.username} tipped rs ${alertMessage.amount}";
function rgbToHex(r: number, g: number, b: number) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
const Page = () => {
  const [templateUrl, setTemplateUrl] = useState("");
  const accessToken = getCookie("access_token");

  const [inputValue, setInputValue] = useState(1);

  const onChange = (newValue: number) => {
    setInputValue(newValue);
  };
  // modal
  const [image, setImage] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fontSetting, setFontSetting] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("gif", file);

    try {
      const response = await fetch(dev_base_url + "/upload/alert-gif", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const responseData = await response.json();
      setImage(responseData.data);
      handleOk();
      console.log("File uploaded successfully:", responseData);
      // Handle success
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
      // Handle error
      notification.error({
        message: "Something went wrong uploading gif",
      });
    }
  };
  const onFinish = async (value: any) => {
    const { r, g, b } = value.textColor.metaColor;
    const hexValue = rgbToHex(Math.round(r), Math.round(g), Math.round(b));
    const requestBody = {
      title: value?.messageTemplate
        ? value.messageTemplate
        : defaultMessageTemplate,
      message: "test alert",
      messageStyle: {
        font: value.fontFamily,
        font_size: value.fontSize,
        text_color: hexValue,
        font_weight: value.fontWeight,
      },
      visibility: {
        duration: 5,
        delay: 0,
      },
      image: {
        path: image,
      },
      audio: {
        url: "https://stream-alert-backend.onrender.com/assets/audio.ogg",
      },
      animation: true,
      custom: {
        enter_animation: "flash",
        exit_animation: "fadeOut",
      },
    };
    try {
      const response = await fetch(dev_base_url + "/templates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        } as HeadersInit,
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const responseData = await response.json();
      setTemplateUrl(responseData.data);
      handleOk();
      notification.success({
        message: "Template created successfully",
      });
      console.log("File uploaded successfully:", responseData);
      // Handle success
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
      // Handle error
      notification.error({
        message: "Something went wrong uploading gif",
      });
    }
  };
  const copyTemplateUrl = () => {
    // Copy the content of the templateUrl div to the clipboard
    navigator.clipboard
      .writeText(templateUrl)
      .then(() => {
        message.info("Copied to clipboard");
      })
      .catch((error) => {
        console.error("Failed to copy:", error);
      });
  };

  const onTestAlert = async () => {
    const requestBody = {
      streamer: "65f4990be1fdb4b19e3b7c2f",
      message: "kill chicken dinner",
      amount: "900000",
      fullName: "Bipin Giri",
    };
    try {
      const response = await fetch(dev_base_url + "/alerts/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        } as HeadersInit,
        body: JSON.stringify(requestBody),
      });
      if (!response.ok) {
        throw new Error("Upload failed");
      }
      const responseData = await response.json();
      console.log("File uploaded successfully:", responseData);
      // Handle success
    } catch (error: any) {
      console.error("Error uploading file:", error.message);
      // Handle error
      notification.error({
        message: "Something went wrong uploading gif",
      });
    }
  };
  return (
    <div>
      <div className="bg-background p-8 rounded-xl">
        <div className="flex items-center justify-around">
          <h1 className="text-3xl font-bold">Alert Box</h1>
          <div className="flex gap-4 items-center">
            <div className="w-[400px] h-[41px] bg-gray-200 p-2 rounded text-wrap ">
              {templateUrl}
            </div>

            <div className="flex justify-between gap-3 items-center">
              <Button
                onClick={copyTemplateUrl}
                size="large"
                className="bg-primary text-white"
              >
                Copy
              </Button>
              <Button
                onClick={onTestAlert}
                size="large"
                className="bg-primary-2"
              >
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
          >
            <Input
              defaultValue={defaultMessageTemplate}
              placeholder="Full Name"
              className="py-2 focus:border-black hover:border-black"
            />
          </Form.Item>
          <Form.Item
            label="Text Animation"
            name="textAnimation"
            className="font-manrope font-semibold text-[13px] col-span-1 focus:border-black hover:border-black"
            rules={[{ required: true, message: "Please add animation!" }]}
          >
            <Select
              placeholder="Text Animation"
              className="w-[100%] h-[41px] focus:border-black hover:border-black "
            >
              <Option value="fade">Fade</Option>
              <Option value="shakeX">Shake x</Option>
              <Option value="shakeY">shakeY</Option>
              <Option value="bounce">Bounce</Option>
              <Option value="flash">Flash</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Image"
            name="image"
            className="font-manrope font-semibold text-[13px] col-span-2"
          >
            <div
              onClick={() => {
                showModal();
              }}
            >
              <div className="w-full  flex items-center gap-8">
                <Button icon={<UploadOutlined />}>Upload</Button>
                {image && (
                  <div>
                    <img
                      height={100}
                      className="w-[100px] h-[100px]"
                      width={100}
                      alt="image"
                      src={image}
                    />
                  </div>
                )}
              </div>
            </div>
          </Form.Item>

          <Form.Item
            label="Font Family"
            name="fontFamily"
            rules={[
              { required: true, message: "Please input your font family!" },
            ]}
          >
            <Select className="h-[41px] focus:border-black hover:border-black">
              <Select.Option value="roboto">Roboto</Select.Option>
              <Select.Option value="openSans">Open Sans</Select.Option>
              <Select.Option value="lato">Lato</Select.Option>
              <Select.Option value="poppins">Poppins</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Font Size"
            name="fontSize"
            rules={[
              { required: true, message: "Please input your font size!" },
            ]}
          >
            <Slider
              styles={{
                handle: {
                  background: "black",
                  color: "black",
                },
                track: {
                  background: "black",
                },
              }}
              min={16}
              max={80}
              onChange={onChange}
              value={typeof inputValue === "number" ? inputValue : 0}
            />
          </Form.Item>

          <Form.Item
            label="Font Weight"
            name="fontWeight"
            rules={[
              { required: true, message: "Please input your font weight!" },
            ]}
          >
            <Select className="h-[41px] focus:border-black hover:border-black">
              <Select.Option value="400">400</Select.Option>
              <Select.Option value="500">500</Select.Option>
              <Select.Option value="600">600</Select.Option>
              <Select.Option value="700">700</Select.Option>
              <Select.Option value="800">800</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Text Color"
            name="textColor"
            className="h-[41px]"
            rules={[
              { required: true, message: "Please input your text color!" },
            ]}
          >
            <ColorPicker format="hex" defaultValue="black" />
          </Form.Item>

          <Form.Item className="col-span-2 flex justify-end">
            <Button
              className="bg-primary text-white"
              type="text"
              htmlType="submit"
            >
              Submit
            </Button>
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
                    setImage(img_base_url + item);
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
            <Upload
              customRequest={({ file, onSuccess, onError }: any) => {
                uploadFile(file as File).then(() => {
                  onSuccess();
                  notification.info({
                    message: "Gif Uploaded Successfully",
                  });
                });
              }}
              className="w-full"
            >
              <Button icon={<UploadOutlined />}>Upload Yours</Button>
            </Upload>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Page;
