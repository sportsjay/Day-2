import './App.css';

// import biodata page here
import Biodata from './pages/biodata';

const LeftTab = () => {
  return (
    <div style={{backgroundColor:"grey", borderRight:"10px", borderRightColor:"black", height:"100vh", width:"30vw"}}>
      
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{display:"flex", flexDirection:"row"}}>
      <LeftTab />
      <div style={{alignItems:"center"}}>
        <Biodata />
      </div>
    </div>
  );
}

export default App;
