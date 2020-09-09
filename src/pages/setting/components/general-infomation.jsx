import React, { useState } from 'react';

// imports
import { Col, Row, Upload, message, Button, Select } from 'antd';
import { LoadingOutlined, PlusOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import InputField from './input-field';
import { Option } from 'antd/lib/mentions';

import Styles from '../style.less';

// image upload
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

function GeneralInformation() {
  // state data - loaidng and imgUrl
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  // state for input field
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');

  // handle upload
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    }
    if (info.file.status === 'done') {
      // Get url for response in real world
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };

  // upload button
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // Handle setting update
  const handleSubmit = () => {
    return alert('Hello');
    // if (!firstName || !lastName || !email || !phoneNumber) {
    //   return alert("Field can't be empty");
    // } else {
    //   return alert('Submitted');
    // }
  };

  return (
    <>
      <h2>General Information</h2>
      <Row>
        <Col xl={15} lg={24} md={24} sm={24} xs={24}>
          {/* upload image section */}
          <div className={Styles.uploadContainer}>
            {/* Image upload and show image */}
            <div>
              <Upload
                name="avatar"
                listType="picture-card"
                className={Styles.avatarUploader}
                showUploadList={false}
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%' }} />
                ) : (
                  uploadButton
                )}
              </Upload>
              <h3 style={{ fontWeight: 'bold', color: '#919192' }}>Barry Armstrong</h3>
            </div>
          </div>
          {/* Form */}
          <Row>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
              {/* First name */}
              <div className={Styles.inputContainer}>
                <h3>First name</h3>
                <InputField placeholder="First name" />
              </div>
              {/* Email */}
              <div className={Styles.inputContainer}>
                <h3>Email</h3>
                <InputField placeholder="Email your email" type="email" />
              </div>
              {/* Language */}
              <div className={Styles.inputContainer}>
                <h3>Language</h3>
                <Select defaultValue="English" style={{ width: '100%' }}>
                  <Option value="English">English</Option>
                  <Option value="French">French</Option>
                </Select>
              </div>
            </Col>
            <Col xl={12} lg={24} md={24} sm={24} xs={24} style={{ marginTop: 15 }}>
              {/* Last name */}
              <div className={Styles.inputContainerTwo}>
                <h3>Last name</h3>
                <InputField placeholder="Last name" />
              </div>
              {/* Phone number */}
              <div className={Styles.inputContainerTwo}>
                <h3>Phone </h3>
                <InputField placeholder="Enter phone number" type="tel" />
              </div>
              {/* Currency */}
              <div className={Styles.inputContainerTwo} style={{ paddingBottom: 15 }}>
                <h3>Currency</h3>
                <Select defaultValue="CFA" style={{ width: '100%' }}>
                  <Option value="CFA">CFA</Option>
                  <Option value="USD">USD</Option>
                  <Option value="EUR">EUR</Option>
                </Select>
              </div>
            </Col>
          </Row>
          {/* Button */}
          <div className={Styles.btnContainer}>
            <Button
              icon={<CheckOutlined />}
              size="large"
              style={{
                backgroundColor: '#ffba51',
                color: '#FFF',
                border: 'none',
                marginRight: 5,
              }}
              onClick={() => handleSubmit()}
            >
              UPDATE SETTINGS
            </Button>
            <Button
              icon={<CloseOutlined />}
              size="large"
              style={{
                backgroundColor: '#F2F4F6',
                color: '#778CA2',
                border: 'none',
              }}
            >
              CANCEL
            </Button>
          </div>
        </Col>
        <Col xl={9} lg={24} md={24} sm={24} xs={24}>
          <></>
        </Col>
      </Row>
    </>
  );
}

export default GeneralInformation;
