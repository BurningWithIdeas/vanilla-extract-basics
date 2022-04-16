import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../theme.css';

export const address = style({
  color: theme.color.additional,
});

export const social = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: theme.color.teritiary,
  minHeight: '30px',
  padding: `${theme.spacing.sm} ${theme.spacing.lg2}`,
});

export const media = style({});

export const mediaItem = style({
  background: 'black',

  selectors: {
    '&:not:last-child': {
      background: 'green',
    },
  },
});

export const headerContent = style({});

export const color = styleVariants(theme.color, (color) => ({ color }));
