import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContex from '../../store/favorite-context';
function MainNavigation(){
    const favoritesCtx=useContext(FavoritesContex);
    return (<header className={classes.header} >
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>AllMeetups</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites
                    <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                </li>
                <li>
                    <Link to='/new'>NewMeetupPage</Link>
                </li>
            </ul>
        </nav>
    </header>
    )
}
export default MainNavigation;