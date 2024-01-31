import NewsroomCard from "./NewsroomCard";
import iphone from '../img/iphone.webp';
import security from '../img/security.jpg';
import podcast1 from '../img/podcast.jpg';
import podcast2 from '../img/podcast1.jpg';
import appstore1 from '../img/appstore.png';
import appstore2 from '../img/appstore1.png';
import student from '../img/student.jpg';
import camera from '../img/camera.jpg';


const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1,
          width: '100%',
          opacity: 0.2
      }}
  />
);

function Newsroom() {
    return (
      <div className="Newsroom">
        <h2>More from Newsroom</h2>
        <div className="Newsroom-container">
        <div className="subContainer">
        <NewsroomCard image={iphone} cardType="UPDATE" Date="11 December 2023" headlines="Apple launches Journal app, a new app for reflecting on everyday moments"/>
        <NewsroomCard image={security} cardType="UPDATE" Date="07 December 2023" headlines="Report: 2.6B records compromised by data breaches, underscoring needs for E2EE" />
        </div>
        <ColoredLine color="black" />
        <div className="subContainer">
        <NewsroomCard image={podcast1} cardType="UPDATE" Date="05 December 2023" headlines="Apple Podcasts names Wiser Than Me the 2023 Show of the Year" />
        <NewsroomCard image={appstore1} cardType="PRESS RELEASE" Date="29 November 2023" headlines="Apple unveils App Store Award winners, the best apps and games of 2023" />
        </div>
        <ColoredLine color="black" />
        <div className="subContainer">
        <NewsroomCard image={podcast2} cardType="⚡QUICK READ" Date="28 November 2023" headlines="Apple shares the most popular podcasts of 2023" />
        <NewsroomCard image={appstore2} cardType="UPDATE" Date="14 November 2023" headlines="Meet the 2023 App Store Award finalists" />
        </div>
        <ColoredLine color="black" />
        <div className="subContainer">
        <NewsroomCard image={camera} cardType="PHOTOS" Date="09 November 2023" headlines="New iPhone photography exhibition debuts in Paris on November 10" />
        <NewsroomCard image={student} cardType="UPDATE" Date="08 November 2023" headlines="Apple's Swift Student Challenge to open in 2024 with new category" />
        </div>
        <a href="#"><button className='story-btn'>View Archive</button></a>
        </div>
      </div>
    );
  }
  
  export default Newsroom;