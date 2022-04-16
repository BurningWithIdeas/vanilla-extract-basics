import React from 'react';
import * as styles from './style.css';

interface NavigationProps {
  color: keyof typeof styles.color;
}

const Navigation: React.FC<NavigationProps> = ({ color }) => {
  return (
    <section>
      <h1 className={[styles.exampleStyle, styles.color[color]].join(' ')}>Hello world!</h1>
    </section>
  );
};

export default Navigation;
