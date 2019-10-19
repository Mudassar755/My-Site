import React from "react";
import Slider from "../../layout/Slider";
import HomeIcons from "./HomeIcons";
import Info from "./Info";
import VideoSection from "./VideoSection";
import ProjectsSection from "./ProjectsSection";
import NewsLetter from "./NewsLetter";
// import Fade from "react-reveal/Fade";
import Slide from 'react-reveal/Slide';


function Dashboard() {
  return (
    <div>
      <Slider />
      <Slide bottom>
        <HomeIcons />
      </Slide>
      <Slide bottom>
        <Info />
      </Slide>
      <Slide bottom>
        <VideoSection />
      </Slide>
      <Slide bottom>
        <ProjectsSection />
      </Slide>
      <Slide bottom>
        <NewsLetter />
      </Slide>
    </div>
  );
}

export default Dashboard;
