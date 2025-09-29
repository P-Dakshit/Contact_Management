import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/elements/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='container'>
          <div className='py-3'>
            <Routes>
              <Route path='/' element={<Contacts />} />
              <Route path="/contacts/add" element={<AddContact />} />
              <Route path='/contacts/edit/:id' element={<EditContact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
