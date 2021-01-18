export const palette = (isLight: boolean) => {
  return {
    background1Col: isLight ? '#cccccc' : '#2b2b2b',
    background2Col: isLight ? '#dedede' : '#1c1c1c',
    fontCol: isLight ? '#4a4a4a' : 'white',
    cardCol: isLight ? 'white' : '#292929',
    footer: isLight ? '#757575' : '#212121',
  };
};

export const primaryCol = '#03a3ff';
