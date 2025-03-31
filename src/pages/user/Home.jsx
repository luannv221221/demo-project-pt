import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { getAllProduct } from '../../services/productService';
import { Image } from 'antd';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProduct().then((response) => {
            console.log(response);
            setProducts(response.data)
        }).catch(err => console.log(err));
    }, []);
    function getImgUrl(name) {
        // console.log("urrl", name);

        // console.log("chuaanr", new URL(`./${name}`, import.meta.url).origin);
        // return new URL(`./${name}`, import.meta.url).href
        return "../" + name;
    }


    return (
        <>
            <h1 className='text-center mt-5'>Danh sach san pham</h1>

            <Container>
                <Row>
                    {products.map((item) => (
                        <div className="col-lg-3" key={item.id}>
                            <div className="card">
                                {/* <img className="card-img-top" src="{}" alt="Title" /> */}
                                {/* <Image src={item.image}></Image> */}
                                <img src={item.image} />
                                <div className="card-body">
                                    <h4 className="card-title">{item.productName}</h4>
                                    <p className="card-text">{item.price}</p>
                                </div>
                            </div>

                        </div>
                    ))}

                </Row>
            </Container>

        </>
    )
}

export default Home