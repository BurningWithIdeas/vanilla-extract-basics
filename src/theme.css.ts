import { createGlobalTheme } from '@vanilla-extract/css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle('html, body', {
  margin: 0,
});

export const theme = createGlobalTheme(':root', {
  color: {
    main: '#ffffff',
    secondary: '#ffb600',
    teritiary: '#ebebeb',
    additional: '#23282d',
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '32px',
    lg2: '52px',
  },
});
