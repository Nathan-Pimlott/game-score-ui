import { Routes, Route } from "react-router-dom";

import Home from "../home";
import Score from "../score";
import Genres from "../genres";
import Platforms from "../platforms";
import Platform from "../platform";
import AToZ from "../aToZ";
import NotFound from "../notFound";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/score/:scoreId" element={<Score />} />
      <Route path="/genres" element={<Genres />} />
      <Route path="/platforms" element={<Platforms />} />
      <Route path="/platform/:platformId" element={<Platform />} />
      <Route path="/a-to-z" element={<AToZ />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
