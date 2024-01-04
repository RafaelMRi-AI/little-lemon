import greekSalad from "../Images/greek_salad1.jpg";
import bruchetta from "../Images/bruchetta1.jpg";
import lemonDessert from "../Images/lemon_dessert1.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React, { useEffect } from 'react';

const scrollToTopSpecials = () => {
    const homeSpecials = document.getElementById('home-specials');
    if (homeSpecials) {
        homeSpecials.scrollIntoView({ behavior: 'smooth' });
    }
  };



function Specials() {
     useEffect(() => {
        scrollToTopSpecials(); // Call the scrolling function when the component mounts
      }, []);
  return (
    <>
    <div id="home-specials">
      <div className="specials">
        <div className="specials-head">
          <h3>Specials</h3>

          <button id="button">Online Menu</button>
        </div>
      </div>

      <div className="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={greekSalad} />
          <Card.Body>
            <Card.Title>Greek Salad</Card.Title>
            <Card.Text>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={bruchetta} />
          <Card.Body>
            <Card.Title>Bruschetta</Card.Title>
            <Card.Text>
              Our Bruschetta is made from homemade grilled bread that has been
              smeared with garlic and seasoned with salt and olive oil. Topped
              with fresh vegetables.
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={lemonDessert} />
          <Card.Body>
            <Card.Title>Lemon Cake</Card.Title>
            <Card.Text>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined. 
            </Card.Text>
            <Button variant="primary">Order Delivery </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  );
}

export default Specials;
export {scrollToTopSpecials };