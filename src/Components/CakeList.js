import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

function CakeList({cake, isLoading}) {
    return (
        <div className="container">
            <div className="row">
                {isLoading && <p>Getting cake for you</p>}
                {cake.map((cake, index) => (
                <div  key={index} className="col-12 col-sm-5 mb-3 mt-3">
                    <Card>
                    <CardBody>
                        <CardTitle>{cake.title}</CardTitle>
                    </CardBody>
                    <CardImg top src={cake.image} alt={cake.name} />
                    <CardBody>
                        <CardText>{cake.desc}</CardText>
                    </CardBody>
                    </Card>
                </div>
                ))}
            </div>
        </div>
    );
}

export default CakeList;