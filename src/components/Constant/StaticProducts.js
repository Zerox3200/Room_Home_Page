import './StaticProducts.css'
import Image1 from './image-about-dark.jpg'
import Image2 from './image-about-light.jpg'

export function StaticPhotos(props) {
    return (
        <div className='Main_pt2'>
            <img src={Image1} alt='error'></img>
            <div className='Main_pt2_Texts'>
                <p>ABOUT OUR FURNITURE</p>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.
                    Find the furniture pieces you need, from traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your dream space.
                </p>
            </div>
            <img src={Image2} alt='error'></img>
        </div>
    )
}