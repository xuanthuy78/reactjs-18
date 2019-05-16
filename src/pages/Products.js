import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
// import axios from 'axios';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [{
        "id": 1,
        "name": "Brownies - Two Bite, Chocolate",
        "description": "aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit",
        "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
      }, {
        "id": 2,
        "name": "Sachet",
        "description": "ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit amet",
        "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
      }, {
        "id": 3,
        "name": "Energy Drink Bawls",
        "description": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante",
        "imageUrl": "http://dummyimage.com/300x200.png/dddddd/000000"
      }, {
        "id": 4,
        "name": "Basil - Thai",
        "description": "platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum",
        "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
      }, {
        "id": 5,
        "name": "Swiss Chard",
        "description": "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis",
        "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
      }, {
        "id": 6,
        "name": "Ice - Clear, 300 Lb For Carving",
        "description": "sapien a libero nam dui proin leo odio porttitor id consequat in consequat",
        "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
      }, {
        "id": 7,
        "name": "Spice - Paprika",
        "description": "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis",
        "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
      }, {
        "id": 8,
        "name": "Table Cloth 54x72 Colour",
        "description": "fermentum donec ut mauris eget massa tempor convallis nulla neque",
        "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
      }, {
        "id": 9,
        "name": "Flavouring - Orange",
        "description": "id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer",
        "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
      }, {
        "id": 10,
        "name": "Rabbit - Legs",
        "description": "ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa",
        "imageUrl": "http://dummyimage.com/300x200.png/ff4444/ffffff"
      }]
    }
  }

  // componentDidMount() {
  //   axios.get('http://localhost:3004/products').then(res => {
  //     this.setState({
  //       products: res.data
  //     })
  //   });
  // }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <Row>
          {
            products.map(product => (
            <Col sm='4'>
              <Card>
                <CardImg top width="50%" 
                        src={product.imageUrl} 
                        alt={product.name} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>{product.description}</CardText>
                  <Button>Add to card</Button>
                </CardBody>
              </Card>
            </Col>
            ))
          }
          
        </Row>
      </Container>
    )
      
  }
}

export default Products;