import React from 'react';
import { Link } from 'react-router-dom';
import './About-us.css';

const About = () => {
  const teamMembers = [
    {
      name: "Mohamed Ahmed",
      position: "Founder & President",
      experience: "15+ years in tourism",
      image: "/photos/team/president.png",
      description: "Passionate about showcasing Algeria's hidden gems to the world"
    },
    {
      name: "Fatima Zohra",
      position: "Head Tour Guide",
      experience: "10+ years guiding",
      image: "/photos/team/guide1.png",
      description: "Expert in Sahara desert tours and cultural experiences"
    },
    {
      name: "Karim Belkacem",
      position: "Adventure Guide",
      experience: "8+ years experience",
      image: "/photos/team/guide2.png",
      description: "Specialized in mountain trekking and coastal adventures"
    },
    {
      name: "Amina Chenouf",
      position: "Cultural Guide",
      experience: "7+ years experience",
      image: "/photos/team/guide3.png",
      description: "History and culture expert with deep local knowledge"
    }
  ];

  const achievements = [
    { number: "5,000+", label: "Happy Travelers" },
    { number: "12+", label: "Years of Experience" },
    { number: "50+", label: "Destinations Covered" },
    { number: "98%", label: "Customer Satisfaction" }
  ];

  const testimonials = [
    {
      feedback: "The Sahara desert tour exceeded all expectations! Unforgettable experience.",
      tourist: "Sarah M., Blida",
      tour: "3-Day Sahara Adventure"
    },
    {
      feedback: "Best travel agency in Algeria! Professional guides and amazing itineraries.",
      tourist: "Ahmed T., Mostaganem",
      tour: "Coastal Discovery Tour"
    },
    {
      feedback: "They showed us the real Algeria - authentic, beautiful, and welcoming.",
      tourist: "Maria L., Tizi ouzou",
      tour: "Cultural Heritage Tour"
    }
  ];

  return (
    <main id="about-page">
      <section id="about-hero">
          <div id="content">
            <h1>Discover Algeria With Us</h1>
            <p className="mission">
              Connecting the world to Algeria's breathtaking landscapes and rich cultural heritage since 2012
            </p>
          </div>
      </section>

      <section id="agency-story">
          <div className="story-grid">
            <div className="story-content">
              <h2>Our Story</h2>
              <div className="story-text">
                <p>
                  Founded in 2012 in Blida, <strong>To Do Travel</strong> was born from a simple yet powerful vision: 
                  to showcase the incredible beauty of Algeria to the world.
                </p>
                <p>
                  What started as a small local agency has grown into a trusted name in Algerian tourism, 
                  dedicated to providing unforgettable experiences that reveal the true soul of our country.
                </p>
                <p>
                  From the golden dunes of the Sahara to the pristine Mediterranean coast, from ancient Roman ruins 
                  to vibrant modern cities, we're passionate about sharing every facet of Algeria's diverse beauty.
                </p>
                <p>
                  Our mission is to be the best travel agency in Algeria, offering exceptional tours that combine 
                  adventure, culture, and authentic local experiences at the best value.
                </p>
              </div>
            </div>
            
            <div className="vision-mission">
              <div className="vision-card">
                <h3>Our Vision</h3>
                <p>
                  To become the leading gateway for international travelers discovering Algeria, 
                  setting the standard for sustainable and authentic tourism experiences.
                </p>
              </div>
              
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To provide exceptional travel experiences that showcase Algeria's diverse landscapes, 
                  rich history, and warm hospitality while supporting local communities and preserving 
                  our cultural heritage.
                </p>
              </div>
            </div>
          </div>
      </section>

      <section id="our-team"> 
          <h2 className="section-title">Meet Our Expert Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <article key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="position">{member.position}</p>
                  <p className="experience">{member.experience}</p>
                  <p className="description">{member.description}</p>
                </div>
              </article>
            ))}
          </div>
      </section>

 
      <section id="achievements" >
          <h2 className="achievements-title">Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement">
                <h3>{achievement.number}</h3>
                <p>{achievement.label}</p>
              </div>
            ))}
          </div>
      </section>

      <section id="feedbacks">
          <h2 className="section-title">What Travelers Say</h2>
          <div className="feedbacks-grid">
            {testimonials.map((comment, index) => (
              <div key={index} className="feedback-card">
                <div className="feedback">"{comment.feedback}"</div>
                <div className="tourist">{comment.tourist}</div>
                <div className="tour">{comment.tour}</div>
              </div>
            ))}
          </div>
      </section>

      <section id="about-cta" > 
          <div className="cta-content">
            <h2>Ready to Explore Algeria?</h2>
            <p>Let us create your perfect Algerian adventure</p>
            <Link to="/booking">
              <button className="cta-button">Start Your Journey</button>
            </Link>
          </div>
      </section>
    </main>
  );
};

export default About;