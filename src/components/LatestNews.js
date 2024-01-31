import Card from "./Card";
import CardMini from "./Card-Mini";
import GradientCard from "./GradientCard";
import TinyCard from "./Tiny-card";
import pic2 from '../img/pic2.png'
import pic3 from '../img/pic3.png'
import pic4 from '../img/pic4.png'
import pic5 from '../img/pic5.png'
import pic6 from '../img/pic6.png'
import pic7 from '../img/pic7.png'


function LatestNews() {
    return (
      <div className="LatestNews">
        <h2>Latest News</h2>
        <div className="container">
        <Card />
        <div className="cardsection1">
          <CardMini image= {pic2} cardType="PRESS RELEASE" Date="23 January 2024" content="Apple scores record 13 Academy Award nominations" />
          <CardMini image= {pic3} cardType="PHOTOS" Date="20 January 2024" content="Apple Hongdae now open in South Korea" />
        </div>
        <div className="cardsection1">
          <CardMini image= {pic4} cardType="PRESS RELEASE" Date="18 January 2024" content="Apple Hongdae to welcome first customers January 20" />
          <GradientCard />
        </div>
        <div className="cardsection2">
        <TinyCard image= {pic5} cardType="PRESS RELEASE" Date="11 January 2024" content="Wanda Austin to join Apple's board of directors" display="none"/>
        <TinyCard image= {pic6} cardType="UPDATE" Date="04 January 2024" content="Tamagotchi Adventure kingdom and Cornsweeper launch on Apple Arcade" display="none" />
        <TinyCard image= {pic7} cardType="UPDATE" Date="11 December 2023" content="Redesigned Apple TV app elevates the viewing experience" display="none" />
        <TinyCard image= {pic2} cardType="⚡QUICK READ" Date="13 December 2023" content="Apple expands self Service Repair and introduces new Diagnostics peocess" display="flex" />
        <TinyCard image= {pic3} cardType="⚡QUICK READ" Date="12 December 2023" content="Apple spotlights the top apps and games of 2023 on the App Store" display="flex" />
        <TinyCard image= {pic4} cardType="UPDATE" Date="11 December 2023" content="Apple introduces spatial video capture on iPhone 15 Pro" display="none" />
        </div>
      </div>
      </div>
    );
  }
  
  export default LatestNews;