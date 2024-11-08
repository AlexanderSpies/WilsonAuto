import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "Libre Baskerville, serif",
    body: "Roboto, sans-serif",
  },
  fontWeights: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
  fontStyles: {
    italic: 'italic',
  },
  textStyles: {
    thin: {
      fontWeight: 'thin',
      fontStyle: 'normal',
    },
    light: {
      fontWeight: 'light',
      fontStyle: 'normal',
    },
    regular: {
      fontWeight: 'regular',
      fontStyle: 'normal',
    },
    medium: {
      fontWeight: 'medium',
      fontStyle: 'normal',
    },
    bold: {
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    black: {
      fontWeight: 'black',
      fontStyle: 'normal',
    },
    thinItalic: {
      fontWeight: 'thin',
      fontStyle: 'italic',
    },
    lightItalic: {
      fontWeight: 'light',
      fontStyle: 'italic',
    },
    regularItalic: {
      fontWeight: 'regular',
      fontStyle: 'italic',
    },
    mediumItalic: {
      fontWeight: 'medium',
      fontStyle: 'italic',
    },
    boldItalic: {
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    blackItalic: {
      fontWeight: 'black',
      fontStyle: 'italic',
    },
    // Text styles for Libre Baskerville
    libreRegular: {
      fontFamily: "Libre Baskerville, serif",
      fontWeight: 'regular',
      fontStyle: 'normal',
    },
    libreBold: {
      fontFamily: "Libre Baskerville, serif",
      fontWeight: 'bold',
      fontStyle: 'normal',
    },
    libreItalic: {
      fontFamily: "Libre Baskerville, serif",
      fontWeight: 'regular',
      fontStyle: 'italic',
    },
  },
});

export default theme;



// /* CSS HEX */
// --lapis-lazuli: #06569eff;
// --federal-blue: #010f71ff;
// --white: #ffffffff;
// --moonstone: #639fabff;
// --powder-blue: #bbcde5ff;