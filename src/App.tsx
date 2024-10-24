import HomePage from './pages/home/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WeaponDetailPage from './pages/details/WeaponDetailsPage';
import ArmorDetailPage from './pages/details/ArmorDetailsPage'
import LocationDetailPage from './pages/details/LocationDetailsPage';
import MonsterDetailPage from './pages/details/MonsterDetailsPage';
import ArmorDetailContainer from './components/ArmorFrom/DetailArmor/ArmorDetailContainer';
import MonsterDetailContainer from './components/MonsterFrom/DetailMonster/MonsterDetailContainer';
import LocationDetailContainer from './components/LocationFrom/DetailLocation/LocationDetailContainer';
import WeaponDetailContainer from './components/WeaponFrom/WeaponForm/WeaponDetailContainer';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Weapon",
      element: <WeaponDetailPage />,
    },
    {
      path: "/Armor",
      element: <ArmorDetailPage />,
    },
    {
      path: "/Location",
      element: <LocationDetailPage />,
    },
    {
      path: "/Monster",
      element: <MonsterDetailPage />,
    },
    {
      path: "/ArmorDetailing/:armorId",
      element: <ArmorDetailContainer />
    },
    {
      path: "/MonsterDetailing/:monsterId",
      element: <MonsterDetailContainer />
    },
    {
      path: "/LocationDetailing/:locationId",
      element: <LocationDetailContainer />
    },
    {
      path: "/WeaponDetailing/:weaponId",
      element: <WeaponDetailContainer />
    },
  ]);

  return (
    <div className="bg-[url('./images/wallpaperflare.com_wallpaper.jpg')] w-screen h-screen">
     <RouterProvider router={router} />
    </div>

    )
    
  
}

export default App
