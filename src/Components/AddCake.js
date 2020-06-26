import React, {useState} from "react";
import {
    Form, FormGroup, Col
  } from 'reactstrap';

function AddCake({ insertCake }) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    
    return (
        <Form onSubmit={ (e) => e.preventDefault() }>
            <FormGroup row>
                <Col xs= {12}>
                    <h1>Add A cake</h1>
                </Col>
                <Col xs={12}>
                    <input onChange={(e) => {setTitle(e.target.value)} } type="text" placeholder="Title" value={title}/>
                    <input onChange={(e) => {setDesc(e.target.value)}} type="text" placeholder="Description" value={desc}/>
                    <input onChange={(e) => {setImgUrl(e.target.value)}} type="text" placeholder="Image Url" value={imgUrl}/>
                    <input type="submit" value="ADD" onClick={ () => insertCake(title, desc, imgUrl)} />
                </Col>
            </FormGroup>
        </Form>
    );
}

export default AddCake;