import React,{Component} from "react";
import styles from "./Home.module.scss";
import Menu from "../../Components/Menu/Menu"
import FlexConatiner from "../../Components/FlexContainer/FlexContainer";
import firstImg from "../../Assets/home/create-and-share.jpg"
import secondImg from "../../Assets/home/beautiful-stories.jpg"
import thirdImg from "../../Assets/home/designed-for-everyone.jpg"
import Card from "../../Components/Card/Card";
import Card1 from "../../Assets/home/cards/mountains.jpg"
import Card2 from "../../Assets/home/cards/cityscapes.jpg"
import Card3 from "../../Assets/home/cards/18-days-voyage.jpg"
import Card4 from "../../Assets/home/cards/architecturals.jpg"
import ResponsiveIcon from "../../Assets/home/icons/Shape.png"
import NoLimitIcon from "../../Assets/home/icons/002-forever.png"
import  EmbedIcon  from "../../Assets/home/icons/003-bullhorn.png";
import IconCard from "../../Components/IconCard/IconCard";
import Footer from "../../Components/Footer/Footer";
class Home extends Component{
    state={
        sections:{
            firstSection:{
                header:"Create and share your photo stories.",
                paragraph:"Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
                img:firstImg
            },
            secondSection:{
                header:"BEAUTIFUL STORIES EVERY TIME",
                paragraph:"We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
                img:secondImg
            },
            thirdSection:{
                header:"DESIGNED FOR EVERYONE",
                paragraph:"Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ",
                img:thirdImg
            }
        },
        Cards:[
            {
                header:"The Mountains",
                author:"by John Appleseed",
                img:Card1
            },
            {
                header:"Sunset Cityscapes",
                author:"by Benjamin Cruz",
                img:Card2
            },
            {
                header:"18 Days Voyage",
                author:"by Alexei Borodin",
                img:Card3
            },
            {
                header:"Architecturals",
                author:"by Samantha Brooke",
                img:Card4
            }
        ],
        icons:[
            {
                img:ResponsiveIcon,
                header:"100% Responsive",
                desc:"No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
            },
            {
                img:NoLimitIcon,
                header:"No Photo Upload Limit",
                desc:"Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
            },
            {
                img:EmbedIcon,
                header:"Available to Embed",
                desc:"Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
            }
        ]
    }
    render(){
        return(
            <div className={styles.Home}>
                <Menu/>
                <FlexConatiner header={this.state.sections.firstSection.header} paragraph={this.state.sections.firstSection.paragraph} img={this.state.sections.firstSection.img} inverse />
                <FlexConatiner header={this.state.sections.secondSection.header} paragraph={this.state.sections.secondSection.paragraph} img={this.state.sections.secondSection.img}  />
                <FlexConatiner header={this.state.sections.thirdSection.header} paragraph={this.state.sections.thirdSection.paragraph} img={this.state.sections.thirdSection.img} inverse />
                <div className={styles.CardsSlider}>
                {this.state.Cards.map(card=><Card header={card.header} author={card.author} img={card.img}/>)}
                </div>
                <div className={styles.IconsSlider}>
                    {this.state.icons.map(icon=><IconCard header={icon.header} desc={icon.desc} icon={icon.img} />)}
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home