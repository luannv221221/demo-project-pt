import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
    return (
        <>
            <NavLink to={"/admin/add-product"}>Thêm mới sản phẩm</NavLink>
            <div>Danh sách sản phẩm</div>
        </>
    )
}

export default Product