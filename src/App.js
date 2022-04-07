import './App.css';
import {Header} from './components/header/header';
import {Footer} from './components/footer/footer';
import { StreamContainer } from './components/streamContainer/streamContainer';
import { tweets } from './data';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='App'>
      <Header />
      <StreamContainer tweets={tweets} />
      <Footer />
    </div>
  );
}

export default App;
