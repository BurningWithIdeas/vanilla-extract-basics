import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const mediaItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginRight: '30px',
    },
  },
});

export const mediaItemImage = style({
  maxHeight: '20px',
  maxWidth: '20px',
});

export const color = styleVariants(theme.color, (color) => ({ color }));
