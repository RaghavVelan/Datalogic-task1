import Card from "./Card";
import CardMini from "./Card-Mini";
import GradientCard from "./GradientCard";
import TinyCard from "./Tiny-card";

function LatestNews() {
    return (
      <div className="LatestNews">
        <h2>Latest News</h2>
        <div className="container">
        <Card />
        <div className="cardsection1">
          <CardMini />
          <CardMini />
        </div>
        <div className="cardsection1">
          <CardMini />
          <GradientCard />
        </div>
        <div className="cardsection2">
        <TinyCard />
        <TinyCard />
        <TinyCard />
        <TinyCard />
        <TinyCard />
        <TinyCard />
        </div>
      </div>
      </div>
    );
  }
  
  export default LatestNews;