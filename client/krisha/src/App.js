import './App.css';
import AllUsers from './components/AllUsers';
import AddUsers from './components/AddUsers';
import Navbar from './components/Navbar';
import EditUser from './components/EditUser';
import Comments from './components/Comments';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Reels from './components/Reels';
import SharePopup from './components/SharePopup';
import CommPage from './components/CommPage';
import ReelApp from './components/ReelApp';

function App() {
   return (
    <div style={{height:"100vh",display: "flex",width:"100%"}}>
    <BrowserRouter>
<div style={{height: "100%",width:"100%",overflowX:"hidden"}}>
  <div style={{width:"100%" , 

 }}>
<Navbar/>
</div>
<div style={{ display: 'flex' ,

  height: "100vh",
 }}>
  <div><Sidebar/></div>

<div style={{flex: 1,
  padding: "15px",
 

  }}>
     <Routes>
      <Route exact path="/" element={<AllUsers/>}/>
      <Route exact path="/add" element={<AddUsers/>}/>
      <Route exact path="/edit/:id" element={<EditUser/>}/>
      <Route exact path="/com" element={<Comments/>}/>
      <Route exact path='/reelsapp' element={<ReelApp/>}/>
      <Route exact path="/reels" element={<Reels/>}/>
      <Route exact path="/share" element={<SharePopup/>}/>
      <Route exact path="/compage" element={<CommPage/>}/>
</Routes>
</div>
</div>
</div>
    </BrowserRouter>
    </div>
    );
  }
export default App;
  
  
  