import './App.css';
import Inventory from './Inventory';
import Sidebar from './Sidebar';
import Grid from './Grid';
import Title from './Title';

function App() {
  return (
    <div className='App'>
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"/>
      </head>
      <div className='container'>
        <div className='left'/>
        <div className='center'>
          <div className='top'>
            <Title/>
          </div>
          <Grid/>
          <div className='bottom'>
            <Inventory/>
          </div>
        </div>
        <div className='right'>
          <Sidebar/>
        </div>
      </div>
    </div>
  );
}

export default App;
