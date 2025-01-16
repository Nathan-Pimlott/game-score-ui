import { Routes, Route } from 'react-router-dom';

import Home from '../home';
import Score from '../score';
import Genres from '../genres';
import NotFound from '../notFound';

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/score/:scoreId" element={<Score />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
