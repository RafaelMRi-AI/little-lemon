import ratings from "../Images/rating.png";
import profileImage1 from "../Images/profileImage1.jpeg";
import profileImage2 from "../Images/profileImage2.jpeg";
import profileImage3 from "../Images/profileImage3.jpeg";
import profileImage4 from "../Images/profileImage4.jpeg";

function Testimonials() {
  return (
    <>
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
    </>
  );
}

export default Testimonials;