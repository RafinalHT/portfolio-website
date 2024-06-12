import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import POS1 from '../media/projects/POS1.jpg'
import POS2 from '../media/projects/POS2.jpg'
import POS3 from '../media/projects/POS3.jpg'
import SAAF1 from '../media/projects/SAAF1.jpg'
import SAAF2 from '../media/projects/SAAF2.jpg'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>PoS (Point of Sales) System with Built-In Machine Learning</h3>
        <Carousel>
          <div>
            <img src={POS1} alt="POS 1" />
          </div>
          <div>
            <img src={POS2} alt="POS 2" />
          </div>
          <div>
            <img src={POS3} alt="POS 3" />
          </div>
        </Carousel>
        <p>Developed an application specialized for retailers to supervise their store effectively and assist them by providing information about customer segmentation, customer churn, stock sales, and sales forecasting.
        </p>
      </div>
      <div className="project">
        <h3>Sistem Audit Akademik Fakultas</h3>
        <Carousel>
          <div>
            <img src={SAAF1} alt="SAAF 1" />
          </div>
          <div>
            <img src={SAAF2} alt="SAAF 2" />
          </div>
        </Carousel>
        <p>Developed an application that supports the management of documents in the Faculty of Computer Science at University of Indonesia.</p>
      </div>
    </section>
  );
}

export default Projects;
