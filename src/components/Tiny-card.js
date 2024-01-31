function TinyCard({image, cardType, Date, content, display}) {
    return (
      <div className="TinyCard">
        <div className="tiny-card-img" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="mini-card-content">
            <p className='card-type'>{cardType}</p>
            <h3>{content}</h3>
            <p className='time-stamp'>{Date}</p>
            <div className="add" style={{display: display}}>+</div>
        </div>
        
      </div>
    );
  }
  
  export default TinyCard;