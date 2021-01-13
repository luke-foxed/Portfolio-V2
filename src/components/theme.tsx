const aboutPage = (isLight: boolean) => {
  return {
    background1Col: isLight ? '#cccccc' : '#2b2b2b',
    background2Col: isLight ? '#dedede' : '#1c1c1c',
    fontCol: isLight ? '#4a4a4a' : 'white',
  };
};

export default aboutPage;
