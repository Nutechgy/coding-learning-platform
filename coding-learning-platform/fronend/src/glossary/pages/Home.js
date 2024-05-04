import React from 'react';
import MatrixBackground from './MatrixBackground';
import GlossaryTab from './GlossaryTab';
import LanguageTab from './LanguageTab';
import PostTab from './PostTab';
import InboxTab from './InboxTab';
import ReviewsTab from './ReviewsTab';
import CommunityTab from './CommunityTab';
import JavaScriptGameTab from './JavaScriptGameTab'; // Import your JavaScript game tab component

const Home = () => {
  return (
    <div>
      <MatrixBackground />
      <div className="tabs">
        <GlossaryTab icon="book" />
        <LanguageTab icon="language" />
        <PostTab icon="post" />
        <InboxTab icon="inbox" />
        <ReviewsTab icon="star" />
        <CommunityTab icon="people" />
        <JavaScriptGameTab icon="game" /> // Add your JavaScript game tab component
      </div>
    </div>
  );
};

export default Home;
