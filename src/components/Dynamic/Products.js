import { faArrowRightLong, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
import Logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticPhotos } from '../Constant/StaticProducts'
import { useState } from 'react'
import Close from './icon-close.svg'

export function ProductSlide() {
    let Paragraph = `we provide unmatched,quality,comfort and style for property owners across the country. Our experts combine
                        form and function in bringing your vision to life. Create a room in your own style with our collection and
                        make your property a reflection of you and what you love.`;
    let Paragraph2 = `With stores all over the world, it's easy for you to find furniture 
            for your home or place of business. Locally, we're in most major cities throughout the country. 
            Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.`;
    let Paragraph3 = `Our modern furniture store provide a high level of quality.
        Our company has invested in advanced technology to ensure that every product is made as
        perfect and as consistent as possible. With three decades of experience in this industry,
        we understand what customers want for their home and office.`;
    // Titles
    let Title = `Discover innovative ways to decorate`;
    let Title2 = `We are available all across the globe`;
    let Title3 = `Manufactured with the best materials`
    const [Right, setRight] = useState(Paragraph);
    const [TitleRight, setTitleRight] = useState(Title);
    const [Image, setImage] = useState("Main_pt1_1");
    const [OpenNav, setOpenNav] = useState("Closing")
    //////////////////////////////////////////////////////////////////////////////////////////////////////////
    const changeRight = () => {
        console.log("HelloRight");
        if (Right === Paragraph) {
            setRight(Paragraph2);
            setTitleRight(Title2);
            setImage("Main_pt1_1_Right1");
        } else if (Right === Paragraph2) {
            setRight(Paragraph3);
            setTitleRight(Title3);
            setImage("Main_pt1_1_Right2")
        } else if (Right === Paragraph3) {
            setRight(Paragraph);
            setTitleRight(Title);
            setImage("Main_pt1_1");
        }
    }
    const changeLeft = () => {
        console.log("HelloLeft");
        if (Right === Paragraph3) {
            setRight(Paragraph2);
            setTitleRight(Title2);
            setImage("Main_pt1_1_Right1");
        } else if (Right === Paragraph2) {
            setRight(Paragraph);
            setTitleRight(Title);
            setImage("Main_pt1_1");

        } else if (Right === Paragraph) {
            setRight(Paragraph3);
            setTitleRight(Title3);
            setImage("Main_pt1_1_Right2");
        }
    }
    const ShowSideNav = () => {
        if (OpenNav === "Closing") {
            setOpenNav("SideNav");
        }
    }
    const CloseNav = () => {
        if (OpenNav === "SideNav") setOpenNav("Closing")
    }
    return (
        <div className='Main'>
            <div className='Main_pt1'>
                <div className={Image}>
                    <div className='Main_pt1_1_links'>
                        <img src={Logo} alt='Img'></img>
                        <div className='SideBar' onClick={ShowSideNav}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className='Links'>
                            <p>home</p>
                            <p>shop</p>
                            <p>about</p>
                            <p>contact</p>
                        </div>
                    </div>
                    <div className='Sliding'>
                        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} onClick={changeLeft} />
                        <FontAwesomeIcon icon={faChevronRight} style={{ color: "white" }} onClick={changeRight} />
                    </div>
                </div>
                <div className='Main_pt1_2'>
                    <p>{TitleRight}</p>
                    <p>
                        {Right}
                    </p>
                    <p>SHOP NOW <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></p>
                </div>
            </div>
            <StaticPhotos />
            <div className={OpenNav}>
                <img src={Close} alt='close' onClick={CloseNav} />
                <p>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    )
}