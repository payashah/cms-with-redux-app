import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { useRoutes } from 'react-router-dom';
import routes from './Routes';
import UserItem from './Components/UserItem/UserItem';

function App() {

  const router = useRoutes(routes)

  return (
    <div className="App">
      <Header></Header>
      <div className='App-main'>
        <Sidebar></Sidebar>

        <div className='App-main-change'>
          <UserItem> </UserItem>
          {router}
        </div>


      </div>

    </div>
  );
}

export default App;
