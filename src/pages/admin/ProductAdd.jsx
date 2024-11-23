import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, InputNumber, Select, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { getCategoryAPI } from '../../services/categoryService';
import axios from 'axios';
import { postProductAPI } from '../../services/productService';
const onFinish = (values) => {
    console.log('Success:', values);
    postProductAPI(values).then(res => {
        console.log("Thêm mới thành công");
    }).catch(err => {

    })
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const ProductAdd = () => {
    const [form] = Form.useForm();
    const [previewImage, setPreviewImage] = useState();

    const [dataCategoryAPI, setDataCategoryAPI] = useState([]);
    const onGenderChange = (value) => {
        form.setFieldsValue({
            categoryId: value
        })
    };

    const handlerFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            // console.log(reader.result);
            setPreviewImage(reader.result);
        }
        if (file) {
            reader.readAsDataURL(file);
            axios.post("http://localhost:8080/api/v1/upload", { file: file }, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            }).then(response => form.setFieldsValue({ image: response.data })).catch(err => console.log(err))
            console.log("OKOKO", file);
        }
    }
    // call api hiển thị danh sách danh mục trong select option 
    useEffect(() => {
        callAPI();
    }, []);

    const callAPI = () => {
        getCategoryAPI().then(response => {
            setDataCategoryAPI(response.data);
        }).catch(err => console.log(err));
    }
    return (
        <>
            <Form
                form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="productName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your productName!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product price"
                    name="price"

                    rules={[
                        {
                            required: true,
                            message: 'Please input your price!',
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>

                <Form.Item
                    name="categoryId"
                    label="Category"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Chọn danh mục"
                        onChange={onGenderChange}
                        allowClear
                    >
                        {dataCategoryAPI.map((item) => {
                            return (
                                <Option value={item.id}>{item.categoryName}</Option>
                            )
                        })}

                    </Select>
                </Form.Item>
                <Form.Item label="Chọn ảnh" >
                    <Input type='file' onChange={(e) => handlerFileChange(e)} />

                    {previewImage && (<img src={previewImage} width={100} height={100} />)}

                </Form.Item>
                <Form.Item name="image">
                    <Input hidden={true} />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Thêm mới
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default ProductAdd