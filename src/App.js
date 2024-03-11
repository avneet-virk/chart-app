import "./App.css";
import ChartMain from "./chartJs/ChartMain";
import ReCharts from "./reCharts/ChartMain";
import Victory from "./victory/ChartMain";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/chartJS" element={<ChartMain />} />
          <Route path="/reCharts" element={<ReCharts />} />
          <Route path="/victory" element={<Victory />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
