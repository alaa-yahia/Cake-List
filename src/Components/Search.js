import React, {useState} from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Form, FormGroup, Col
  } from 'reactstrap';

function Search({cake}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    function handleSearch(e) {
        e.preventDefault();
        let filteredArr = cake.filter( (item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
          })
          setSearchResult(filteredArr.map((cake, index) => (
            <div  key={index}>
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
          )))  
        }

    return (
        <div className="container">
            <div className="row">

            <Form className="col-12 col-sm-6">
                    <FormGroup>
                    <Col sm={10}>
                        <input onChange={ (e) => setSearchTerm( e.target.value ) } type="text" placeholder="Search" value={searchTerm}/>
                        <input type="submit" value="Search" onClick={handleSearch}/>
                    </Col>
                    </FormGroup>
                </Form>

                <div className="col-12 col-sm-6 searchResult">
                {searchTerm ? searchResult : ""}
                </div>

            </div>
        </div>



    );
  }

  export default Search;