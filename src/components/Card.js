import img from '../img/pic1.png'

function Card() {
    return (
      <div className="Card">
      <div className="img"></div>
        <div className="card-content">
            <p className='card-type'>PRESS RELEASE</p>
            <h3>Apple annnounces changes to iOS,Safari, and the App Store in the European Union</h3>
            <p className='time-stamp'>25 January 2024</p>
        </div>
      </div>
    );
  }
  
  export default Card;