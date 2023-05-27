import React from 'react';
import Nav from "../Nav/Nav";
import HomePageVideo from "../ReUsableComponents/HomePageVideo/HomePageVideo";
import HomeImageWithDescription from "../ReUsableComponents/HomeImageWithDescription/HomeImageWithDescription";
import Footer from "../ReUsableComponents/Footer/Footer";

class Home extends React.Component {
    render() {
        const headerText1 = <span>Say <span className="home-page-item-with-description-green">NO</span> to <span className="home-page-item-with-description-green">lowball offers</span></span>;
        const descriptionText1 = <span>Get real-time access to all of your offers. Prioritize them and make the right decision.</span>

        const headerText2 = <span><span className="home-page-item-with-description-green">NO more guessing</span>  games!</span>;
        const descriptionText2 = <span>Gain access to information on current offers, saving both you and your agent time when deciding to submit an offer. Never miss out on your next home again!</span>

        const headerText3 = <span><span className="home-page-item-with-description-green">Transactions</span> made <span className="home-page-item-with-description-green">simple</span></span>;
        const descriptionText3 = <span>Communicate with all stakeholders at one place. No need to remember multiple passwords and websites.</span>

        const headerText4 = <span>Get <span className="home-page-item-with-description-green">free access</span> to real estate agents, attorneys and service providers in your local area</span>;
        const descriptionText4 = <span>All at one place.</span>
        return (
            <div>
                {/*<Nav />*/}
                <HomePageVideo />
                <HomeImageWithDescription imageName={"HomePageItem1.png"} imageAlignLeftDirection={false} headerText={headerText1} descriptionText={descriptionText1} isImageLeft={false} booleanTextAlignLeft = {true} />
                <HomeImageWithDescription imageName={"HomePageItem2.png"} imageAlignLeftDirection={true} headerText={headerText2} descriptionText={descriptionText2} isImageLeft={true} booleanTextAlignLeft = {false} />
                <HomeImageWithDescription imageName={"HomePageItem3.png"} imageAlignLeftDirection={false} headerText={headerText3} descriptionText={descriptionText3} isImageLeft={false} booleanTextAlignLeft = {true} />
                <HomeImageWithDescription imageName={"HomePageItem4.png"} imageAlignLeftDirection={true} headerText={headerText4} descriptionText={descriptionText4} isImageLeft={true} booleanTextAlignLeft = {false} />
                {/*<Footer />*/}
            </div>
        );
    }
}

export default Home;