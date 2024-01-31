function StoryGradientCard() {
    return (
      <div className="StoryGradientCard">
         <div className="gradient-card-content">
            <p className='card-type' style={
            {backgroundColor:'#6F6F74',borderRadius:'10px', width:'max-content',padding:'5px',fontSize:'10px',color:'#fff'}
            }>ACCESSIBILITY</p>
            <h3 style={{textAlign:'left'}}>A disability advocate preserves his voice with iPhone</h3>
            <p className='time-stamp' style={{textAlign:'left'}}>30 November 2023</p>
        </div>
      </div>
    );
  }
  
  export default StoryGradientCard;