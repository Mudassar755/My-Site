import React from "react";
import Slider from "../../layout/Slider";
import HomeIcons from "./HomeIcons";
import Info from "./Info";
import VideoSection from "./VideoSection";
import PhotoGallery from "./PhotoGallery";
import NewsLetter from "./NewsLetter";
// import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';


function Dashboard() {
  return (
    <div>
      <Slider />
      <Slide right>
        <HomeIcons />
      </Slide>
      <Slide bottom>
        <Info />
      </Slide>
      <Slide bottom>
        <VideoSection />
      </Slide>
      <Slide bottom>
        <PhotoGallery />
      </Slide>
      <Slide bottom>
        <NewsLetter />
      </Slide>
    </div>
  );
}

export default Dashboard;
