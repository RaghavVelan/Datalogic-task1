import pic1 from '../img/pic2.png'

function CardMini() {
    return (
      <div className="CardMini">
        <div className="mini-card-img" style={{ backgroundImage: `url(${pic1})` }}></div>
        <div className="mini-card-content">
            <p className='card-type'>PRESS RELEASE</p>
            <h3>Apple annnounces changes to iOS,Safari, and the App Store in the European Union</h3>
            <p className='time-stamp'>25 January 2024</p>
        </div>
        
      </div>
    );
  }
  
  export default CardMini;