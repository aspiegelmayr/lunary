import React from "react"
import {Card, CardGroup, Button} from "react-bootstrap"
import coat from "./images/coat.jpg"
import dress from "./images/dress.jpg"
import shirt from "./images/shirt.jpg"

class ClothingItem extends React.Component {
    render(){
        return(
          <CardGroup id="clothes-cards">
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={coat} />
              <Card.Body>
                <Card.Title>Winter Coat</Card.Title>
                <Card.Text>
                    <p id="desc">
                  This winter coat is very warm and cozy. <br/>
                  Features:
                      <ul> 
                          <li>Removable hood</li>
                          <li>2 pockets with zipper</li>
                      </ul> 
                      <Button variant="link" className="btn">See More</Button>
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Available Sizes: XS-XXL</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={dress} />
              <Card.Body>
                <Card.Title>Polka Dot Dress</Card.Title>
                <Card.Text>
                <p id="desc">
                  The polka dot dress will be your new favorite dress! <br/>
                  Features:
                      <ul> 
                          <li>Design by Franz Hauser</li>
                          <li>Adjustable belt</li>
                      </ul> 
                      <Button variant="link" className="btn">See More</Button>
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Available Sizes: S-XL</small>
              </Card.Footer>
            </Card>
            <Card bg="dark" text="white">
              <Card.Img variant="top" src={shirt} />
              <Card.Body>
                <Card.Title>Tank Top</Card.Title>
                <Card.Text>
                <p id="desc">
                  This basic tank top is a must-have! Combinable with any outfit! <br/>
                  Features:
                      <ul> 
                          <li>Available in 3 colors: White, Black, and Gray</li>
                      </ul> 
                      <Button variant="link" className="btn">See More</Button>
                  </p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Available Sizes: XXS-5XL</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        )
    }    
}

export default ClothingItem