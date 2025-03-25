

import PageHeader from './Components/Header';
import Amenities from './Components/Amenities';
import SpaceOverview from './Components/SpaceOverview';
import MeetingBanner from './Components/Banner'
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <PageHeader/>
      <MeetingBanner/>
      <Amenities/>
      <SpaceOverview/>
      <Footer/>
      
    </div>
  );
}

export default App;
