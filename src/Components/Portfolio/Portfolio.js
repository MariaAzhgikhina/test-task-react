import React, {Component} from "react";
import './Portfolio.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../img/img-1.png';
import img2 from '../../img/img-2.png';
import img3 from '../../img/img-3.png';
import img4 from '../../img/img-4.png';
import img5 from '../../img/img-5.png';
import img6 from '../../img/img-6.png';



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


class Portfolio extends Component {
    state = {
        portfolioItems: icons.map( (item) => 
            <div className="portfolio__item" key={item.img}>
                <img src={item.img} alt="portfolio"/>
                <div className="hover">
                    <div className="hover__search"><FontAwesomeIcon icon={faSearch} /></div>
                </div>
            </div>
        )
    }


    renderPortfolioItems = (items) => {
        let newItems = items.map( (item) => 
            <div className="portfolio__item" key={item.img}>
                <img src={item.img} alt="portfolio"/>
                <div className="hover">
                    <div className="hover__search"><FontAwesomeIcon icon={faSearch} /></div>
                </div>
            </div>
        );
        
        this.setState({
            portfolioItems: newItems
        });
    }
    
    addClassName = (e) => {
        const parent = e.target.parentNode;
        for(let i = 0;i<parent.children.length;i++){
            parent.children[i].classList.remove('portfolio__btn_active');
        }
        e.target.classList.add("portfolio__btn_active");
    }
    
    portfolioButtonClick = (type, e) =>{
        this.addClassName(e);
        let filtered = icons;
        if (type !== "all"){
            filtered = icons.filter( (icon) => icon.type === type);
        }
        this.renderPortfolioItems(filtered);
    }

    render(){

        return (
            <div id="portfolio" className="portfolio container">
                <h2 className="title">Portfolio</h2>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <div className="portfolio__filter">
                    <div className="button portfolio__btn portfolio__btn_active" onClick={(e) => this.portfolioButtonClick("all",e)}>All</div>
                    <div className="button portfolio__btn" onClick={(e) => this.portfolioButtonClick("web", e)}>WEB DESIGN</div>
                    <div className="button portfolio__btn" onClick={(e) => this.portfolioButtonClick("graphic", e)}>GRAPHIC DESIGN</div>
                    <div className="button portfolio__btn" onClick={(e) => this.portfolioButtonClick("flat", e)}>FLAT DESIGN</div>
                </div>
                <div className="portfolio__items">
                    {this.state.portfolioItems}
                </div>
        
            </div>
        )
    }   
}

export default Portfolio;