function StoryGradientCard() {
    return (
      <div className="StoryGradientCard">
         <div className="gradient-card-content">
            <p className='card-type' style={
            {backgroundColor:'#6F6F74',borderRadius:'10px', width:'max-content',padding:'5px',fontSize:'10px',color:'#fff'}
            }>APPLE STORIES</p>
            <h3 style={{textAlign:'left'}}>Apple unveils 2024 Black Unity Collection and annouces six REJI grantees</h3>
            <p className='time-stamp' style={{textAlign:'left'}}>17 January 2024</p>
        </div>
      </div>
    );
  }
  
  export default StoryGradientCard;