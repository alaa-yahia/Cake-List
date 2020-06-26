import React, {useState} from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
    Button
  } from 'reactstrap';

  function CakeItem({ item, updateCakeItem, index }) {
    const [editBtnClicked, setEditBtnClicked] = useState(false);
    const [title, setTitle] = useState(item.title);
    const [desc, setDesc] = useState(item.desc);
    const [imgUrl, setImgUrl] = useState(item.image);

    function handleClick() {
        setEditBtnClicked(!editBtnClicked);
        if(title !== item.title || desc !== item.desc || imgUrl !== item.image) {
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
            <CardTitle ><input onChange={(e) => {setTitle(e.target.value)}}  type="text" placeholder="Insert Title" value={title} /></CardTitle>
        </CardBody>
        <CardBody>
            <CardText><input onChange={(e) => {setImgUrl(e.target.value)}} type="text" placeholder="Insert Image Url" value={imgUrl} /></CardText>
        </CardBody>
        <CardBody>
            <CardText><input onChange={(e) => {setDesc(e.target.value)}} type="text" placeholder="Insert Description" value={desc}/></CardText>
            <Button onClick={handleClick}>Done</Button>
        </CardBody>

        </Card>

    </div>
    );
  }

  export default CakeItem;




