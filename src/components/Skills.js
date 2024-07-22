import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 500 },
  });

  return (
    <animated.section ref={ref} style={fadeIn} id="skills">
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Python</li>
        <li>Django</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>Google Cloud Platform</li>
      </ul>
    </section>
    </animated.section>
  );
}

export default Skills;
