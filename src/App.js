import {SearchProvider} from './context/search/SearchContext';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Footer from './components/footer/Footer';

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <main className='main'>
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/detail/:mal_id' element={<Detail/>}/>
            </Routes>
          </Router>
        </main>
        <footer className='footer'>
          <Footer/>
        </footer>
      </div>
    </SearchProvider>
  );
}

export default App;
