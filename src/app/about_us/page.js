"use client"
import React from 'react'
import styled from 'styled-components'

const About_us = () => {



    return (
        <Wrapper>
            <div className="cont">
                <h2 className="py-8 font-extrabold">About Us</h2>
                <br />
                <p>Welcome to Trip Go Easy, your passport to a world of travel experiences! At Trip Go Easy, we're passionate about exploring the globe and helping you discover the wonders it holds.</p>

                <p className="py-4">
                    <strong>
                        Our Story:
                    </strong>
                </p>
                <p className="py-2">
                    {/* <strong>a. Personal Information: </strong> */}
                    Founded by a group of avid travelers who shared a common dream of making travel accessible and unforgettable for everyone, Trip Go Easy was born out of a desire to inspire, inform, and connect travelers worldwide. With years of collective experience traversing the globe, we understand the transformative power of travel and the joy of immersing oneself in new cultures, cuisines, and landscapes.
                </p>
                <p className="py-4">
                    <strong>
                        What We Offer:
                    </strong>
                </p>
                <p className="py-2">
                    At Trip Go Easy, we believe in curating authentic and enriching travel experiences tailored to your preferences. Whether you're seeking adrenaline-pumping adventures, cultural immersion, serene retreats, or culinary delights, we've got you covered. From off-the-beaten-path destinations to iconic landmarks, our meticulously crafted itineraries cater to every traveler, from solo adventurers to families and couples.
                </p>
                <p className="py-4">
                    <strong>
                        Why Choose Us?
                    </strong>
                </p>
                <div>
                    1. <strong>	Expertise:</strong> Our team of travel experts possesses first hand knowledge of destinations worldwide, ensuring that every aspect of your journey is seamlessly planned and executed. <br /> <br />
                    2. <strong>	Personalization: </strong> We understand that no two travelers are alike. That's why we offer customizable itineraries designed to match your interests, preferences, and budget. <br /> <br />
                    3.<strong>	Quality: </strong> From accommodations to transportation and activities, we partner with trusted suppliers to deliver exceptional quality and value at every step of your journey. <br /> <br />
                    4.<strong> Support:</strong> Your satisfaction is our top priority. Our dedicated customer support team is available around the clock to assist you before, during, and after your trip.
                    <br /> <br />
                    5.<strong>	Sustainability:</strong> We are committed to promoting responsible travel practices that minimize our environmental impact and support local communities.

                </div>

                <p className="py-4">
                    <strong>
                        Join Us on the Journey:
                    </strong>
                </p>
                <p className="py-2">
                    Embark on your next adventure with Trip Go Easy and unlock a world of possibilities. Whether you're dreaming of a tropical escape, a cultural odyssey, or an epic road trip, we're here to turn your travel dreams into reality.
                </p>
                <p className="py-2">Let's explore together and create memories that will last a lifetime!</p>





            </div >
        </Wrapper >

    );
}

const Wrapper = styled.div`
  background-color: #e3dfdf;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  .cont {
    width: 70%;
    margin: 0 auto;
    padding: 2% 5%;
    
    background-color: white;
    h2 {
      text-align: center;
      font-size: 2rem;
    }
    p,
    strong {
      font-size: 1rem;
    }
    @media (max-width: 600px) {
        h2{
            font-size: 14px;
        }
      strong, p ,li{
        font-size: 12px; /* Decrease font size for smaller screens */
      }
    }
  }
`;

export default About_us
