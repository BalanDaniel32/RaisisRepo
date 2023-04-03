import {useContext} from 'react';
import FavoritesContex from '../store/favorite-context';
import MeetupList from '..//components/layout/meetups/MeetupList';

function FavoritesPage(){
    const favoritesCtx=useContext(FavoritesContex);
    let content;
    if(favoritesCtx.totalFavorites===0){
        content=<p>You got no favorites yet. Start adding some?</p>
    }
    else{
        content=<MeetupList meetups={favoritesCtx.favorites}/>
    }
    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;