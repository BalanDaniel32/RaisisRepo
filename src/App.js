
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetups';
import Layout from './components/layout/Layout/Layout';
function App() {
  return (
    <Layout>

      <Route path='/' exact>
      <AllMeetupsPage></AllMeetupsPage>
      </Route>
      <Route path='/new'>
        <NewMeetupPage></NewMeetupPage>
      </Route>
      <Route path='/favorites'>
          <FavoritesPage></FavoritesPage>
      </Route>
    
      </Layout>
      
     
  
      
      

     
  );
}

export default App;
