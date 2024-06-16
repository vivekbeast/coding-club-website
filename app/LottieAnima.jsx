import React from 'react';
import Lottie from 'react-lottie';
import animationData from './loading'; // Adjust the path to your JSON file

const LottieAnima = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie style={{backgroundColor: "inherit", borderRadius: "100%"}} options={defaultOptions} height={400} width={400} />;
};

export default LottieAnima;