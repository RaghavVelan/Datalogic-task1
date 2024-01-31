import pic1 from '../img/pic2.png'
import pic2 from '../img/pic3.png'

function TinyCard() {
    return (
      <div className="TinyCard">
        <div className="tiny-card-img" style={{ backgroundImage: `url(${pic2})` }}></div>
        <div className="mini-card-content">
            <p className='card-type'>PRESS RELEASE</p>
            <h3>Apple annnounces changes to iOS,Safari, and the App Store in the European Union</h3>
            <p className='time-stamp'>25 January 2024</p>
        </div>
        
      </div>
    );
  }
  
  export default TinyCard;