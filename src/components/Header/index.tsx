import React from 'react';
import { address, social, media } from './Header.css';
import facebookIcon from '../../assets/images/facebookIcon.png';
import SocialMediaItem from '../SocialMediaItem';
import { SocialMediaItem as MediaItemInterface } from '../types/media';

const mediasList: MediaItemInterface[] = [
  { image: facebookIcon, link: '#' },
  { image: facebookIcon, link: '#' },
  { image: facebookIcon, link: '#' },
];

const Header = () => {
  return (
    <header>
      <div className={social}>
        <p className={address}>Pushkina st, Kolotushkina house</p>
        <div className={media}>
          {mediasList.map(({ image, link }, index) => (
            <SocialMediaItem key={index} image={image} link={link} />
          ))}
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;

// import React from 'react';
// import * as styles from './style.css';

// interface HeaderProps {
//   color: keyof typeof styles.color;
// }

// const Header: React.FC<HeaderProps> = ({ color }) => {
//   return (
//     <section>
//       <h1 className={[styles.exampleStyle, styles.color[color]].join(' ')}>Hello world!</h1>
//     </section>
//   );
// };

// export default Header;
