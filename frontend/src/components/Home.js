import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="home">
      <div className="container">
        <h1>Welcome  to Fitness App</h1>
        <p>Choose a feature from the navigation menu to get started!</p>

        {/* Introduction Section */}
        <section className="introduction">
          <h2>About Our Fitness App</h2>
          <p>
            Our app is designed to help you achieve your fitness goals, whether you’re looking to
            lose weight, gain muscle, or just maintain a healthy lifestyle. We offer a variety of
            features to keep you motivated and on track.
          </p>
          <img 
            src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg" 
            alt="Fitness goals" 
            className="intro-image"
          />
        </section>

        {/* Features Section */}
        <section className="features">
          <h2>Key Features</h2>
          <ul>
            <li>Personalized Workout Plans</li>
            <li>Nutrition Tracking</li>
            <li>Progress Monitoring</li>
            <li>Community Support</li>
          </ul>
          <div className="feature-gifs">
            <img 
              src="https://media.giphy.com/media/l1J9EdzfOSgfyueLm/giphy.gif" 
              alt="Workout GIF" 
              className="feature-gif"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits">
          <h2>Why Choose Our App?</h2>
          <p>
            With personalized plans and real-time progress tracking, our app helps you stay on top
            of your fitness journey. Whether you’re a beginner or a seasoned athlete, we have
            something for everyone.
          </p>
          <img 
            src="https://images.pexels.com/photos/1954520/pexels-photo-1954520.jpeg" 
            alt="Healthy Lifestyle" 
            className="benefit-image"
          />
        </section>

        {/* Call to Action Section */}
        <section className="call-to-action">
          <h2>Get Started Today!</h2>
          <p>
            Ready to take your fitness journey to the next level? Sign up now and get access to all
            the amazing features our app offers.
          </p>
          <img 
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg" 
            alt="Sign Up Today" 
            className="cta-image"
          />
        </section>
      </div>
    </div>
  );
}

export default Home;
