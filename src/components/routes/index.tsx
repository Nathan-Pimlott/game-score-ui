import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../home';
import NotFound from '../notFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
