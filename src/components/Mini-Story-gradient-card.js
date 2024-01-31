function MiniStoryGradientCard(props) {
    return (
      <div className="MiniStoryGradientCard">
         <div className="gradient-card-content">
            <p className='card-type' style={
            {backgroundColor:props.paragraphColor,borderRadius:'10px', width:'max-content',padding:'5px',fontSize:'10px',color:'#fff'}
            }>{props.cardType}</p>
            <h3 style={{textAlign:'left'}}>{props.content}</h3>
            <p className='time-stamp' style={{textAlign:'left'}}>{props.Date}</p>
        </div>
      </div>
    );
  }
  
  export default MiniStoryGradientCard;