import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Registration from './Component/Form/Registration';
import {Routes,Route} from 'react-router-dom'
import Read from './Component/Read/Read';
import Update from './Component/Update/Update';
import Delete from './Component/Delete/Delete';

function App() {
  return (
    <div className='container-fluid text-center'>
         <h2>React Crud Operations</h2>
         <div>
           <Routes>
             <Route path='/' element={<Registration/>}/>
             <Route path='/read' element={<Read/>}/>
             <Route path='/update' element={<Update/>}/>
             <Route path='/delete' element={<Delete/>}/>
           </Routes>
         </div>
    </div>
  );
}

export default App;
