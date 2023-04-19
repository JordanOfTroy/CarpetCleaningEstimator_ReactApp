import './App.css';
import Router from './Router';
import { RouterProvider} from 'react-router-dom'



function App() {

 


  return (
    <div className="App">
      <header className="App-header">
      <RouterProvider router={Router}/>
      </header>
    </div>
  );
}

export default App;
