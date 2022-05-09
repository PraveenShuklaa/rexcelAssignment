import './App.css';
import App1 from './components/App1';
import Aside from './components/aside/Aside';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <App1 />
  )
  // return (
  //   <div className="app">
  //     <div className='header'>
  //       <Header />
  //     </div>
  //     <div className='mainSection'>
  //       <Sidebar />
  //       <Aside />
  //     </div>
  //   </div>
  // );
}

export default App;
