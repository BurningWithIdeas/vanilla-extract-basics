import React from 'react';
import { mediaItem, mediaItemImage } from './SocialMediaItem.css';
import { SocialMediaItemProps } from './SocialMediaItem.types';

const SocialMediaItem: React.FC<SocialMediaItemProps> = ({ image, link }) => (
  <a className={mediaItem} href={link}>
    <img className={mediaItemImage} src={image} alt="" />
  </a>
);

export default SocialMediaItem;
