import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mmood-intitutional-site" element={<HomeLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;