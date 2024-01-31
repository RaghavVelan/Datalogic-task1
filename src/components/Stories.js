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
            <MiniStoryGradientCard paragraphColor="orange" />
            <MiniStoryGradientCard paragraphColor="blue" />
            <MiniStoryGradientCard paragraphColor="#6F6F74" />
          </div>
        </div>
        <a href="#"><button className='story-btn'>View All</button></a>
        <br />
      </div>
    );
  }
  
  export default Stories;