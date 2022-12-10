import { Fragment } from "react"

import mealsImage from '../../assets/img/team-1-800x800.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
    <>
        <header>
            <h1>React Meal</h1>
            <button>Card</button>
        </header>
        <div>
            <img src={ mealsImage } alt='A table full of delicious food!' />
        </div>
    </>
    )
};

export default Header