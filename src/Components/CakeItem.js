import React, {useState} from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
    Button
  } from 'reactstrap';

  function CakeItem({ item, updateCakeItem, index }) {
    const [editBtnClicked, setEditBtnClicked] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    function handleClick() {
        setEditBtnClicked(!editBtnClicked);
        if(title !== item.title && title !=='') {
            updateCakeItem(title, desc, imgUrl, index);
        }
    }

    return (
    <div className="col-12 col-sm-5 mb-3 mt-3" >

        <Card className={!editBtnClicked ? "unhidden" : "hidden"} >
        <CardBody>
            <CardTitle >{item.title}</CardTitle>
        </CardBody>
        <CardImg top src={item.image} alt={item.title} />
        <CardBody>
            <CardText>{item.desc}</CardText>             
        </CardBody>
        <Button onClick={handleClick}>Edit</Button>
        </Card>
        
        <Card className={editBtnClicked ? "unhidden" : "hidden"}>
        <CardBody>
            <CardTitle ><input onChange={(e) => {setTitle(e.target.value)}}  type="text" placeholder="Insert Title" /></CardTitle>
        </CardBody>
        <CardBody>
            <CardText><input onChange={(e) => {setImgUrl(e.target.value)}} type="text" placeholder="Insert Image Url" /></CardText>
        </CardBody>
        <CardBody>
            <CardText><input onChange={(e) => {setDesc(e.target.value)}} type="text" placeholder="Insert Description" /></CardText>
        </CardBody>
        <Button onClick={handleClick}>Done</Button>
        </Card>

    </div>
    );
  }

  export default CakeItem;




