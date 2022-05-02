import { Platform } from 'react-native';

const platformStyles = (type: TextType) =>
  Platform.select({
    ios: {
      fontSize: getFontSize('ios', type),
      fontFamily: 'Avenir',
    },
    android: { fontSize: getFontSize('android', type), fontFamily: 'Roboto' },
  });

const getFontSize = (platform: 'ios' | 'android', type: TextType): number => {
  switch (platform) {
    case 'ios':
      switch (type) {
        case 'header':
          return 26;
        case 'subheader':
          return 20;
        case 'body':
          return 16;
      }
    case 'android':
      switch (type) {
        case 'header':
          return 26;
        case 'subheader':
          return 20;
        case 'body':
          return 16;
      }
  }
};

const colors = {
  primary: '#fc5c65',
  secondary: '#4ecdc4',
  dark: '#0c0c0c',
  medium: '#6e6969',
  light: '#f8f4f4',
  black: '#171717',
  white: '#fff',
};

export type TextType = 'header' | 'subheader' | 'body';

export default {
  colors,
  iconButtonSize: 32,
  text: {
    body: {
      color: colors.dark,
      ...platformStyles('body'),
    },
    header: {
      color: colors.dark,
      ...platformStyles('header'),
    },
    subheader: {
      color: colors.dark,
      ...platformStyles('subheader'),
    },
  },
};
