import Header from "./components/Header";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import AdoptCats from './screens/AdoptCats';
import CatScreen from "./screens/CatScreen";
import AdoptDogs from './screens/AdoptDogs';
import AdoptRabbits from './screens/AdoptRabbits';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <main className="py-3">
      <Container>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
          <Route path='/contact' element={<ContactScreen />} />
          <Route path='/adopt/cats' element={<AdoptCats />} />
          <Route path='/adopt/cats/:id' element={<CatScreen />} />
          <Route path='/adopt/dogs' element={<AdoptDogs />} />
          <Route path='/adopt/rabbits' element={<AdoptRabbits />} />

        </Routes>
        
      </Container>
    </main>
    
    </BrowserRouter>
  );
}

export default App;
