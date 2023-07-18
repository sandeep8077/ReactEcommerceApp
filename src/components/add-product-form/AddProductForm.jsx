import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


import { useState } from "react";
import { addProduct } from "../../store/products/product.action";
import { selectProductsArray } from "../../store/products/product.selector";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";





const ProductForm = ()=>{
  
    const [title, setTitle] = useState("");
    const [description, setdescription] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [image, setImage] = useState("");



    const dispatch = useDispatch();
    const products = useSelector(selectProductsArray);
  
    const navigate = useNavigate();
  
    const handelAddProduct = () => {
      const newProduct = {
        title,
        description,
        price: Number(price),
        rating: Number(rating),
        images: [image],
        id: Date.now(),
      };
  
      dispatch(addProduct(products, newProduct));
      toast("Product Added TO db");
      navigate("/allProds");
    };


    return(<>
    <Container >
        
        <Row className="justify-content-md-center my-3">
             <Col md={{ span: 6, offset: 3 }}>
             <h1 className='justify-content-md-center'>Add Product</h1>
             </Col>
        </Row>
      
    <Form>
        <Row className="justify-content-md-center">
            <Col lg={6}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
            
             <Form.Control 
             type="text" 
             placeholder="Title"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
              />
       
            </Form.Group>
            </Col>
        </Row>
      
<Row className="justify-content-md-center">
    <Col lg={6}>

    <Form.Group className="mb-3" controlId="formBasicDesc">
        
        <Form.Control 
        type="text" 
        placeholder="Description"
        value={description}
        onChange={(e) => setdescription(e.target.value)}
         />
      </Form.Group>
    </Col>
    
</Row>
    

      <Row className="justify-content-md-center">
    <Col lg={6}>
    <Form.Group className="mb-3" controlId="formBasicPrice">
       
        <Form.Control 
        type="text" 
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
         />
      </Form.Group>
    </Col>
    
</Row>

     
      <Row className="justify-content-md-center">
    <Col lg={6}>
    <Form.Group className="mb-3" controlId="formBasicRating">
       
        <Form.Control 
        type="text" 
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
         />
      </Form.Group>
    </Col>
    
</Row>

  
      <Row className="justify-content-md-center">
    <Col lg={6}>
    <Form.Group className="mb-3" controlId="formBasicUrl">
        
        <Form.Control 
        type="text"
        placeholder="Image Url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
         />
      </Form.Group>
    </Col>
    
</Row>

      

<Stack gap={2} className="col-md-6 mx-auto">
      <Button variant="primary" onClick={handelAddProduct} > Add Product</Button>
    
    </Stack>

    </Form>
    </Container>
    
    </>)

}
export default ProductForm;