import React from 'react';
import Slider from '../../layout/Slider';
import HomeIcons from './HomeIcons';
import Info from './Info';
import VideoSection from './VideoSection';
import PhotoGallery from './PhotoGallery';
import NewsLetter from './NewsLetter';

 function Dashboard() {
  return (
    <div>
      <Slider />
      <HomeIcons />
      <Info />
      <VideoSection />
      <PhotoGallery />
      <NewsLetter />
    </div>
  )
}

export default Dashboard;
