import logo from './logo.svg';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import DownloadApp from '../components/Sections/DownloadApp';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Outlet />
      {/* <DownloadApp /> */}
      <Footer />
    </div>
  );
}

export default App;
