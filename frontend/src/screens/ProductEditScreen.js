import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";
import FormContainer from "../components/FormContainer";
import { Button, Form } from "react-bootstrap";

const ProductEditScreen = ({ match, history }) => {
    const productId = match.params.id;

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState("");

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;

    // const userUpdate = useSelector((state) => state.userUpdate);
    // const { success: successUpdate, loading: loadingUpdate, error: errorUpdate } = userUpdate;

    useEffect(() => {
        if (!product.name || product._id !== productId) {
            dispatch(listProductDetails(productId));
        } else {
            setName(product.name);
            setPrice(product.price);
            setImage(product.image);
            setBrand(product.brand);
            setCategory(product.category);
            setCountInStock(product.countInStock);
            setDescription(product.description);
        }
    }, [history, dispatch, product, productId]);

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Link to="/admin/productlist" className="btn btn-outline-dark btn-light my-3">
                Go Back
            </Link>
            <FormContainer>
                <h1 className="mb-0 pb-2">Edit Product</h1>
                {/* {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant="danger">{errorUpdate}</Message>} */}
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message variant="danger">{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="name" className="my-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="price" className="my-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" placeholder="Enter Price" value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="image" className="my-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter Image url" value={image} onChange={(e) => setImage(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="brand" className="my-3">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" placeholder="Enter Brand name" value={brand} onChange={(e) => setBrand(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="countInStock" className="my-3">
                            <Form.Label>Count In Stock</Form.Label>
                            <Form.Control type="number" placeholder="Enter Stock count" value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="category" className="my-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" value={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Form.Group controlId="description" className="my-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
                        </Form.Group>

                        <Button type="submit" variant="primary" className="my-1">
                            Update
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    );
};

export default ProductEditScreen;
