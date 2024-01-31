import iphone from '../img/iphone.webp'

function NewsroomCard({image, cardType, Date, headlines}) {
    return (
      <div className="NewsroomCard">
        <div className="img-container" style={{backgroundImage:`url(${image})`}}></div>
        <div className="Newsroom-content">
        <p className='card-type'>{cardType}</p>
            <h3>{headlines}</h3>
            <p className='time-stamp'>{Date}</p>
        </div>
      </div>
    );
  }
  
  export default NewsroomCard;