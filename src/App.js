
import React  ,{useState} from 'react'; 
import TACOS_DATA from './components/assets/tacos-menu';
import Dishes from './components/dishes/dishes.component';
import Header from './components/header/header.component';
import Footer from './components/footer/foote.component';
import Language from './components/language/langauge.component'
import './App.css';

function App() {
  const [lang,setLang] = useState('en');
  const [menu,setMenu] = useState(TACOS_DATA);

  console.log('tacos-data:',TACOS_DATA);

  return (
    <div className="App">
      <div className='container'>
        <div className='header'><Header/></div>
        <p></p>
        <div><Language setLang={setLang}/></div>
        <p></p>
        <div className='menu'><Dishes dishes={menu} lang={lang}/> </div>
        <div className='footer'><Footer/></div>
      </div>      
    </div>
  );
}

export default App;
