import React, {useState} from "react";
import './Portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img1 from './asserts/img-1.png';
import img2 from './asserts/img-2.png';
import img3 from './asserts/img-3.png';
import img4 from './asserts/img-4.png';
import img5 from './asserts/img-5.png';
import img6 from './asserts/img-6.png';






export default function Portfolio () {
    const icons = [
        {
            img: img1,
            type: 'web'
        },
        {
            img: img2,
            type: 'graphic'
        },
        {
            img: img3,
            type: 'flat'
        },
        {
            img: img4,
            type: 'web'
        },
        {
            img: img5,
            type: 'graphic'
        },
        {
            img: img6,
            type: 'flat'
        },
    ]
    const [portfolioItems, setPortfolioItems] = useState(renderPortfolioItems(icons));

    
    function renderPortfolioItems(items){
        return items.map( (item) => 
            <div className="portfolio__item" key={item.img}>
                <img src={item.img} alt="portfolio"/>
                <div className="hover">
                    <div className="hover__search"><FontAwesomeIcon icon={faSearch} /></div>
                </div>
            </div>
        )
    }
    
    function addClassName(e) {
        const parent = e.target.parentNode;
        for(let i = 0;i<parent.children.length;i++){
            parent.children[i].classList.remove('portfolio__btn_active');
        }
        e.target.classList.add("portfolio__btn_active");
    }
    
    const handleButtonClick = (e, type) =>{
        addClassName(e);
        let filtered = icons;
        if (type !== "all"){
            filtered = icons.filter( (icon) => icon.type === type);
        }
        setPortfolioItems(renderPortfolioItems(filtered));
    }


    return (
        <div id="portfolio" className="portfolio container">
            <h2 className="title">Portfolio</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            <div className="portfolio__filter">
                <div className="button portfolio__btn portfolio__btn_active" onClick={(e) =>handleButtonClick(e,"all")}>All</div>
                <div className="button portfolio__btn" onClick={(e) =>handleButtonClick(e,"web")}>WEB DESIGN</div>
                <div className="button portfolio__btn" onClick={(e) =>handleButtonClick(e,"graphic")}>GRAPHIC DESIGN</div>
                <div className="button portfolio__btn" onClick={(e) =>handleButtonClick(e,"flat")}>FLAT DESIGN</div>
            </div>
            <div className="portfolio__items">
                {portfolioItems}
            </div>
        </div>
    )

}