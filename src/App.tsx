import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';

function App() {
  return (
    <BrowserRouter basename="/mmood-intitutional-site/">
      <Routes>
        <Route path="" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;