import logo from '../asset/apple-logo.png'
import arrow from '../asset/right-arrow.png'

function Footer() {
    return (
      <div className="Footer">
        <div className="title-footer"><h3><img src={logo} width={15} alt="Apple logo"/> <img src={arrow} width={15} alt="arrow" /> Newsroom</h3></div>
        <div className="footer-container">
            <div className="footer-section1">
                <div className="footer-subsection1">
                    <h3>Shop and Learn</h3>
                    <ul>
                        <a href="#"><li>Store</li></a>
                        <a href="#"><li>Mac</li></a>
                        <a href="#"><li>iPad</li></a>
                        <a href="#"><li>iPhone</li></a>
                        <a href="#"><li>Watch</li></a>
                        <a href="#"><li>AirPods</li></a>
                        <a href="#"><li>TV & Home</li></a>
                        <a href="#"><li>AirTag</li></a>
                        <a href="#"><li>Accessories</li></a>
                        <a href="#"><li>Gift Cards</li></a>
                    </ul>
                </div>
                <br />
                <div className="footer-subsection2">
                    <h3>Apple Wallet</h3>   
                    <ul>
                        <a href="#"><li>Wallet</li></a>
                    </ul> 
                </div>
            </div>
            <div className="footer-section2">
                <div className="footer-subsection3">
                    <h3>Account</h3>
                    <ul>
                        <a href="#"><li>Manage Your Apple ID</li></a>
                        <a href="#"><li>Apple Store Account</li></a>
                        <a href="#"><li>iCloud.com</li></a>
                    </ul>
                </div>
                <br />
                <div className="footer-subsection4">
                    <h3>Entertainment</h3>
                    <ul>
                       <a href="#"><li>Apple One</li></a>
                       <a href="#"><li>Apple TV+</li></a>
                       <a href="#"><li>Apple Music</li></a>
                       <a href="#"><li>Apple Arcade</li></a>
                       <a href="#"><li>Apple Podcasts</li></a>
                       <a href="#"><li>Apple Books</li></a>
                       <a href="#"><li>App Store</li></a>
                    </ul>
                </div>
            </div>
            <div className="footer-section3">
                    <h3>Apple Store</h3>
                    <ul>
                        <a href="#"><li>Find a Store</li></a>
                        <a href="#"><li>Genius Bar</li></a>
                        <a href="#"><li>Today at Apple</li></a>
                        <a href="#"><li>Apple Camp</li></a>
                        <a href="#"><li>Apple Trade in</li></a>
                        <a href="#"><li>Ways to Buy</li></a>
                        <a href="#"><li>Recycling Programme</li></a>
                        <a href="#"><li>Order Status</li></a>
                        <a href="#"><li>Shopping Help</li></a>
                    </ul>
            </div>
            <div className="footer-section4">
                <div className="footer-subsection5">
                    <h3>For Business</h3>
                    <ul>
                        <a href="#"><li>Apple and Business</li></a>
                        <a href="#"><li>Shop for Business</li></a>
                    </ul>
                </div>
                <br />
                <div className="footer-subsection6">
                    <h3>For Education</h3>
                    <ul>
                        <a href="#"><li>Apple and Education</li></a>
                        <a href="#"><li>Shop for Education</li></a>
                        <a href="#"><li>Shop for University</li></a>
                    </ul>
                </div>
                <br />
                <div className="footer-subsection7">
                    <h3>For Healthcare</h3>
                    <ul>
                        <a href="#"><li>Apple in Healthcare</li></a>
                        <a href="#"><li>Health on Apple Watch</li></a>
                    </ul>
                </div>
            </div>
            <div className="footer-section5">
                <div className="footer-subsection8">
                    <h3>Apple Values</h3>
                    <ul>
                        <a href="#"><li>Accessibility</li></a>
                        <a href="#"><li>Education</li></a>
                        <a href="#"><li>Environment</li></a>
                        <a href="#"><li>Privacy</li></a>
                        <a href="#"><li>Suppiler Responsibility</li></a>
                    </ul>
                </div>
                <br />
                <div className="footer-subsection9">
                    <h3>About Apple</h3>
                    <ul>
                        <a href="#"><li>Newsroom</li></a>
                        <a href="#"><li>Apple Leadership</li></a>
                        <a href="#"><li>Career Opportunities</li></a>
                        <a href="#"><li>Investors</li></a>
                        <a href="#"><li>Ethics & Compliance</li></a>
                        <a href="#"><li>Events</li></a>
                        <a href="#"><li>Contact Apple</li></a>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;