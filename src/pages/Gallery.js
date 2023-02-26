import './Gallery.css';
import Header from '../components/Header';
import Card from '../components/Card';
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";
import image5 from "../img/5.jpg";
import image6 from "../img/6.jpg";
import image7 from "../img/7.jpg";
import image8 from "../img/8.jpg";
import image9 from "../img/9.jpg";
import image10 from "../img/10.jpg";
import image11 from "../img/11.jpg";
import image12 from "../img/12.jpg";
import image13 from "../img/13.png";
import image14 from "../img/14.jpg";
import image15 from "../img/15.jpg";



export default function Gallery(){
    let para = "Productions from our selected artists";
    return (
        <div className="gallery-container">
            <Header heading="/ Our gallery" text={para}/>
            <div className="cards-container">
                <Card image={image1} text="Description of image"/>
                <Card image={image2} text="Description of image"/>
                <Card image={image3} text="Description of image"/>
                <Card image={image4} text="Description of image"/>
                <Card image={image5} text="Description of image"/>
                <Card image={image6} text="Description of image"/>
                <Card image={image7} text="Description of image"/>
                <Card image={image8} text="Description of image"/>
                <Card image={image9} text="Description of image"/>
                <Card image={image10} text="Description of image"/>
                <Card image={image11} text="Description of image"/>
                <Card image={image12} text="Description of image"/>
                <Card image={image13} text="Description of image"/>
                <Card image={image14} text="Description of image"/>
                <Card image={image15} text="Description of image"/>
            </div>
        </div>
    )

};

