import { Route, Routes } from 'react-router-dom';
import RegPage from './Pages/RegPage/RegPage';
import AuthPage from './Pages/AuthPage/AuthPage'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/reg' element={<RegPage />} />
        <Route path='/auth' element={<AuthPage />} />
      </Routes>

    </div>
  );
}

export default App;
