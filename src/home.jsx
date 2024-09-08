
import './home.css';
import { useEffect, useState } from 'react';
import video from './assets/video/home.mp4';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

function Home() {


    useEffect(() => {
        const slider = document.getElementById('servicesSlider');
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');
        const cardWidth = 320; // Width of each card + margin
        let currentPosition = 0;
        const maxPosition = -(slider.children.length - 3) * cardWidth;
    
        function updateSliderPosition() {
          slider.style.transform = `translateX(${currentPosition}px)`;
        }
    
        prevButton.addEventListener('click', function () {
          if (currentPosition < 0) {
            currentPosition += cardWidth;
            updateSliderPosition();
          }
        });
    
        nextButton.addEventListener('click', function () {
          if (currentPosition > maxPosition) {
            currentPosition -= cardWidth;
            updateSliderPosition();
          }
        });
    
        // Cleanup event listeners on component unmount
        return () => {
          prevButton.removeEventListener('click', () => { });
          nextButton.removeEventListener('click', () => { });
        };
      }, []);
    
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({ name: '', email: '', message: '' });
      };

      return(
        <div className="mb-5 col-12">

    <section id="home" className="sectionV">
      <div className="video-container">
        <video autoPlay muted loop className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay-content text-start">
          <h1>Welcome to ModulaVers</h1>
          <p>
            At ModulaVers, we are dedicated to crafting cutting-edge solutions that drive progress and meet the evolving needs of today’s digital landscape. By blending advanced technology with strategic insight, we empower businesses to enhance efficiency, optimize performance, and achieve sustainable growth. Our commitment to innovation ensures that we deliver impactful solutions that transform challenges into opportunities, paving the way for a brighter and more connected future.
          </p>
          <a href="#contact" className="btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>

    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content" style={{marginTop:"12vh"}}>
          <h1>About Us</h1>
          <hr />
          <p>
            At ModulaVers, we are passionate about pioneering the future of technology through innovative solutions. Established with a vision to transform the way businesses operate, our team combines expertise in software development, data analytics, and digital transformation to deliver exceptional results.
          </p>
          <p>
            Our approach is centered on understanding your unique challenges and goals, allowing us to create tailored solutions that drive efficiency, enhance productivity, and foster growth. From robust software applications to insightful data strategies, we are dedicated to leveraging the latest advancements to meet the demands of a rapidly evolving digital landscape.
          </p>
          <p>
            What sets us apart is our commitment to excellence and our relentless pursuit of innovation. We pride ourselves on our ability to adapt to changing technologies and market trends, ensuring that our solutions are not only effective but also future-proof.
          </p>
          <p>
            Partner with ModulaVers, and let us help you navigate the complexities of modern technology with confidence and agility. Together, we can build a brighter, more connected future.
          </p>
        </div>
      </div>
    </section>

    <section id="services" className="section col-12">
      <div className="main-container" style={{marginTop:"12vh"}}>
        <h2 className="services-title">Our Services</h2>
        <div className="services-slider-container">
          <div className="services-slider" id="servicesSlider">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3 className="service-title">Custom Software Development</h3>
              <p className="service-description">Tailored software solutions designed to meet your unique business needs and challenges.</p>
              <a href="#" className="service-button">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3 className="service-title">Search Engine Optimization (SEO)</h3>
              <p className="service-description">
                Boost your online visibility and drive organic traffic with our expert SEO strategies tailored to your business goals.
              </p>
              <a href="#" className="service-button">Optimize Now</a>
            </div>
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3 className="service-title">Cloud Solutions</h3>
              <p className="service-description">Scalable and secure cloud infrastructure and migration services for enhanced performance and flexibility.</p>
              <a href="#" className="service-button">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3 className="service-title">Data Analytics</h3>
              <p className="service-description">Advanced data analysis and visualization tools to help you make informed business decisions.</p>
              <a href="#" className="service-button">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3 className="service-title">Cybersecurity</h3>
              <p className="service-description">Comprehensive security solutions to protect your digital assets and ensure data integrity.</p>
              <a href="#" className="service-button">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3 className="service-title">Mobile App Development</h3>
              <p className="service-description">User-friendly and feature-rich mobile applications for iOS and Android platforms.</p>
              <a href="#" className="service-button">Learn More</a>
            </div>
            <div className="service-card">
              <div className="service-icon">🗄️</div>
              <h3 className="service-title">Database Management</h3>
              <p className="service-description">Efficient database design, optimization, and maintenance services for improved data handling.</p>
              <a href="#" className="service-button">Learn More</a>
            </div>
          </div>
        </div>
        <div className="slider-nav">
          <button className="slider-nav-button" id="prevButton">Previous</button>
          <button className="slider-nav-button" id="nextButton">Next</button>
        </div>
      </div>
    </section>

    <section id='contact' className="bg-light py-5">
      <div className="container" style={{marginTop:"12vh"}}>
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="mb-4">Get in Touch</h3>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-telephone-fill me-2 text-primary"></i>
                <span>+94 (76) 5772-504</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-fill me-2 text-primary"></i>
                <a href="mailto:info@techsolutions.com" className="text-decoration-none text-dark">srisadeepa658@gmail.com</a>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                <span>No:8/2,Neelammahara Road, Katuwawala,Boralesgamuwa</span>
              </li>
              <br />
              <li className="d-flex align-items-center">
                <i className="bi bi-facebook me-2 text-primary"></i>
                <a style={{textDecoration:'none', color:'black'}} href='https://www.facebook.com/ModulaVerseSystems'>ModulaVers System</a>
              </li>
             
            </ul>

            <div className="col-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15846.167930238562!2d79.908075!3d6.8254215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2slk!4v1725728490303!5m2!1sen!2slk" className='col-12' height="450" style={{border:0}} loading="lazy" allowFullScreen referrerPolicy="no-referrer"></iframe>
            </div>

          </div>
          <div className="col-md-6 text-start">
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-start">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="your@email.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your message here..."
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Send Message
                  <i className="bi bi-send-fill ms-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className='d-lg-none d-xl-none d-xxl-none d-md-none d-sm-block' style={{ height: "12vh" }}></section>

  </div>

      );

    


}
export default Home;