import logo from '../asset/apple-logo.png';
import StoryGradientCard from './Story-gradient-card';
import MiniStoryGradientCard from './Mini-Story-gradient-card';

function Stories() {
    return (
      <div className="Stories">
      <br />
        <div className="heading">
          <h2><img src={logo} alt="Logo" />Stories</h2>
          <p>The creators, developers, and innovators leaving the world better then they found it.</p>
        </div>
        <div className="card-container">
          <StoryGradientCard />
          <div className="mini-card-container">
            <MiniStoryGradientCard paragraphColor="orange" cardType="CREATIVES" Date="11 December 2023" content="New AR app brings student creativity to life with iPad Pro and Apple Pencil" />
            <MiniStoryGradientCard paragraphColor="blue" cardType="DEVELOPERS" Date="28 November 2023" content="Meet 3 winners of the WWDC23 Swift Student Challenge" />
            <MiniStoryGradientCard paragraphColor="#6F6F74" cardType="ACCESSIBILITY" Date="05 December 2023" content="AssistiveWare users in next generation of AAC technology" />
          </div>
        </div>
        <a href="#"><button className='story-btn'>View All</button></a>
        <br />
      </div>
    );
  }
  
  export default Stories;