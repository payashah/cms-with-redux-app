import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';

function App() {

  const router = useRoutes(routes)

  return (
    <div className="App">
      <Header></Header>
      <div className='App-main'>
        <Sidebar></Sidebar>
        {router}
      </div>

    </div>
  );
}

export default App;
