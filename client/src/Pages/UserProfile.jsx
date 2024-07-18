import React,{ useState }  from 'react';
import SideBar, { SideBarItem } from '../Components/SideBar';
import RecipeSearch from './RecipeSearch';
import { Search, Star, Settings2 } from 'lucide-react';
import DisplayFavs from './DisplayFavs';

export default function UserProfile() {
  const [showFavourites, setShowFavourites] = useState(false);

  const handleSidebarItemClick = (item) => {
    if (item === 'My Favourites') {
      setShowFavourites(true);
    } else {
      setShowFavourites(false);
    }
  };
  return (
    <div className='flex flex-row'>
      <SideBar>
        <SideBarItem icon={<Search size={20}/>} text="Find Recipes" onItemClick={(text) => handleSidebarItemClick(text)}/>
        <SideBarItem icon={<Star size={20}/>} text="My Favourites"  onItemClick={(text) => handleSidebarItemClick(text)}/>
        <SideBarItem icon={<Settings2 size={20}/>} text="Settings" onItemClick={(text) => handleSidebarItemClick(text)}/>
      </SideBar>
      <div className="flex-grow">
        {showFavourites ? <DisplayFavs /> : <RecipeSearch />}
      </div>
    </div>
  )
}
