
import './App.css';

import PageHeader from './Components/Header';
import Amenities from './Components/Amenities';
import SpaceOverview from './Components/SpaceOverview';
import MeetingBanner from './Components/Banner'

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <MeetingBanner/>
      <Amenities/>
      <SpaceOverview/>
      
    </div>
  );
}

export default App;
