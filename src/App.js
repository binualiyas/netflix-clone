
import './App.css';
import {originals,action,comedy,horror,romance,documentary} from './urls.'
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';
import RowPost from './components/rowpost/RowPost';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost genre='Netflix Originals' url={originals}/>
      <RowPost genre='Action Movies' url={action} isSmall/>
      <RowPost genre='Comedy Movies' url={comedy} isSmall/>
      <RowPost genre='Horror Movies' url={horror} isSmall/>
      <RowPost genre='Romance Movies' url={romance} isSmall/>
      <RowPost genre='Documentary' url={documentary} isSmall/>
    </div>
  );
}

export default App;
