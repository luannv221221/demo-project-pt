import { Button, Table, Tag } from 'antd'
import React, { useEffect, useState } from 'react'
import { getCategoryAPI } from '../../services/categoryService';

const Category = () => {
    const [dataAPI, setDataAPI] = useState([]);

    useEffect(() => {
        callAPI();
    }, []);

    const callAPI = () => {
        getCategoryAPI().then(response => {
            setDataAPI(response.data);
        }).catch(err => console.log(err));
    }
    const columns = [
        {
            title: 'ID',
            dataIndex: 'categoryId',
            key: 'categoryId',
        },
        {
            title: 'categoryName',
            dataIndex: 'categoryName',
            key: 'categoryName',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Status',
            dataIndex: 'categoryStatus',
            key: 'categoryStatus',
            render: (categoryStatus) => (
                <Tag color={categoryStatus ? 'blue' : 'red'}>{categoryStatus ? 'Active' : 'Inactive'}</Tag>
            )

        },
        {
            title: 'Action',
            dataIndex: 'categoryId',
            render: (categoryId) => (
                <>
                    <Button onClick={() => handeleEdit(categoryId)}>Edit</Button>
                    <Button color='red' onClick={() => handeleDelete(categoryId)}>Delete</Button>
                </>

            )
        },
    ];
    return (
        <Table dataSource={dataAPI} columns={columns} rowKey={record => record.categoryId} pagination={false} />
    )
}

export default Category