import React, { useState } from 'react';
import './App.css';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires a loader
import images from './imageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Max Peterson</h1>
        <p>IoT • React Native • Backend</p>
      </header>

      <div className="personal-note">
        <h2>Engineering Powerful Mobile Applications with Seemless IoT Integration</h2>
        <p>My name is Max Peterson, I am a React Native Specialist committed to sculpting cutting-edge mobile experiences. My expertise spans from dynamic back-end solutions with Node.js and AWS services to seamless IoT and Bluetooth integrations.</p>
        <p>Thriving in Agile environments, I've led cross-functional teams to innovate and enhance applications, achieving elevated user experiences for a diverse client base.</p>
        <p>Discover how my relentless drive for quality, combined with a passion for the latest technological trends, turns complex visions into reality.</p>
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Phone: 650-888-4721</p>
          <p>Email: mpeterson94@me.com</p>
          <p>LinkedIn: https://www.linkedin.com/in/maxpeterson-swe/</p>
        </div>
      </div>

      <section className="app-section">
        <h2>Mobile Security Device</h2>
        <p>Revolutionizing security with intuitive device synchronization and robust backend architecture.</p>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={2000}
          centerMode={true}
          centerSlidePercentage={20}
        >
          {images.map((image, index) => (
            <div key={index} onClick={() => openModal(image.src)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </section>

      <section className="app-section">
        <h2>Lighting Controller Manager</h2>
        <p>Revolutionizing security with intuitive device synchronization and robust backend architecture.</p>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          centerMode={true}
          centerSlidePercentage={20}
        >
          {images.map((image, index) => (
            <div key={index} onClick={() => openModal(image.src)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </section>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Image Modal">
        <FontAwesomeIcon icon={faTimes} onClick={closeModal} className="modal-close-icon" />
        <img src={selectedImage} alt="Enlarged view" className="modal-image" />
      </Modal>

      <footer className="App-footer">
        <p>© 2024 Max Peterson - All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default App;