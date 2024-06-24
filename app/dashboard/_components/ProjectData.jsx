import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ClientCard from './ClientCard';
import Card from './ClientCard';

const DemoCarousel = () => {
  const onChange = (index, item) => {
    console.log('onChange', index, item);
  };

  const onClickItem = (index, item) => {
    console.log('onClickItem', index, item);
  };

  const onClickThumb = (index, item) => {
    console.log('onClickThumb', index, item);
  };

  return (
    <div className="flex justify-center flex-col w-full h-screen md:w-full rounded-lg items-center md:bg-transparent">
      <h1 className="oswald-hwlo font-semibold text-2xl  md:mb-2">Events & Workshops</h1>
      <Carousel
         showArrows={true}
         onChange={onChange}
         onClickItem={onClickItem}
         onClickThumb={onClickThumb}
         className="w-full max-w-md md:max-w-lg mt-8 lg:max-w-2xl rounded-lg border-0"
         showThumbs={false}
         autoPlay={true}
         infiniteLoop={true}
         dynamicHeight={true}
         interval={3000}
         transitionTime={500}
         stopOnHover={true}
         swipeable={true}
         emulateTouch={true}
         useKeyboardArrows={true}
         showStatus={false}
         showIndicators={true}
         axis="horizontal"
      >
        <div className="relative h-[400px] md:h-[700px]">
          <img src="/Event1.png" alt="Slide 1" className="rounded-lg shadow-lg object-full w-full h-full" />
        </div>
        <div className="relative h-[400px] md:h-[700px]">
          <img src="/Event2.png" alt="Slide 2" className="rounded-lg shadow-lg object-cover w-full h-full" />
        </div>
        <div className="relative h-[400px] md:h-[700px]">
          <img src="/Event3.png" alt="Slide 3" className="rounded-lg shadow-lg object-cover w-full h-full" />
        </div>
        <div className="relative h-[400px] md:h-[700px]">
          <img src="/Evn1.png" alt="Slide 4" className="rounded-lg shadow-lg object-full w-full h-full" />
        </div>
        <div className="relative h-[400px] md:h-[700px]">
          <img src="/Evn2.png" alt="Slide 5" className="rounded-lg shadow-lg object-cover w-full h-full" />
        </div>
        <div className="relative h-[400px] md:h-[700px]">
          <img src="/Evn3.png" alt="Slide 6" className="rounded-lg shadow-lg object-cover w-full h-full" />
        </div>
      </Carousel>
      {/* <div className="mt-16 w-full px-4 md:px-0">
        <h1 className="oswald-hwlo font-semibold text-2xl mb-4">Coordinators</h1>
        <div className="flex justify-center">
          <Card />
        </div>
      </div> */}
    </div>
  );
};

export default DemoCarousel;
