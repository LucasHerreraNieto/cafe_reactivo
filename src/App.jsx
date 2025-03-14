import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <BrowserRouter>
        <MainContent/>
      </BrowserRouter>
    </div>
  );
}

export default App;