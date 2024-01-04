import React from 'react';

/*Images*/
import restaurantFood from '../Images/restaurantFood.jpg';
import greekSalad from "../Images/greek_salad1.jpg";
import bruchetta from "../Images/bruchetta1.jpg";
import lemonDessert from "../Images/lemon_dessert1.jpg";
import ratings from "../Images/rating.png";
import profileImage1 from "../Images/profileImage1.jpeg";
import profileImage2 from "../Images/profileImage2.jpeg";
import profileImage3 from "../Images/profileImage3.jpeg";
import profileImage4 from "../Images/profileImage4.jpeg";
import restaurant from "../Images/restaurant.jpg";
import MarioAndAdrian from "../Images/Mario and Adrian A.jpg";
/*End of Images*/

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Main() {
  return <main>{
    <>
      <div className="main">
        <div className="main-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <a href="#" className="a">
            <button id="button" to="/reservations">
              Reserve a Table
            </button>
          </a>
        </div>

        <div className="featured">
          <img src={restaurantFood} alt="restaurantFood" />
        </div>
      </div>

      <div className="specials">
        <div className="specials-head">
          <h3>This Week Specials!</h3> 
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
              Our Bruschetta is made from grilled bread that it has been
              smeared with garlic and seasoned with salt and olive oil.
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
      <div className="testimonials">
        <div className="testimonial-header">
          <h1>Testimonials</h1>
        </div>

        <div className="review-container">
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profileImage1} alt="Customer Pic" />
            <h2>Rohan D.</h2>
            <p>"Little Lemon, a culinary haven."</p>
          </div>
          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profileImage2} alt="Customer Pic" />
            <h2>Evelyn T.</h2>
            <p>"Little Lemon, soulful delights."</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profileImage3} alt="Customer Pic" />
            <h2>Jasmine C.</h2>
            <p>"Little Lemon vibes"</p>
          </div>

          <div className="review">
            <img id="rating" src={ratings} alt="ratings" />
            <img id="profile" src={profileImage4} alt="Customer Pic" />
            <h2>Ryan C.</h2>
            <p>"Little Lemon rocks."</p>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-content">
          <h4>Little Lemon</h4>
          <h5>Chicago</h5>
          <p>
          Amet minim mollit non deserunt 
          ullamco est sit aliqua dolor do amet 
          sint. Velit officia consequat duis enim 
          velit mollit. Exercitation veniam 
          consequat sunt nostrud amet. 
          Amet minim mollit non deserunt 
          ullamco est sit aliqua dolor do amet 
          sint. Velit officia consequat duis enim 
          velit mollit.
          </p>
        </div>

        <div className="owners">
          <img id="MarioAdrian" src={MarioAndAdrian} alt="owners" />
          <img id="restaurant" src={restaurant} alt="restaurant" />
        </div>
      </div>
    </>
    }</main>;
}

export default Main;