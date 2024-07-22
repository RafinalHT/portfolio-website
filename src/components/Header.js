import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Header = () => {
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));

  return (
    <header>
      <h1>Rafinal Haryokusumo Taloputra</h1>
      <nav>
      <animated.a
          href="#about"
          onMouseEnter={() => set({ transform: 'scale(1.1)' })}
          onMouseLeave={() => set({ transform: 'scale(1)' })}
          style={props}
        >
          About
      </animated.a>
      <animated.a
          href="#projects"
          onMouseEnter={() => set({ transform: 'scale(1.1)' })}
          onMouseLeave={() => set({ transform: 'scale(1)' })}
          style={props}
        >
          Projects
      </animated.a>
      <animated.a
          href="#skills"
          onMouseEnter={() => set({ transform: 'scale(1.1)' })}
          onMouseLeave={() => set({ transform: 'scale(1)' })}
          style={props}
        >
          Skills
      </animated.a>
      </nav>
    </header>
  );
}

export default Header;
