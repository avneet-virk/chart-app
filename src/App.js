import "./App.css";
import ChartMain from "./chartJs/ChartMain";
import ReCharts from "./reCharts/ChartMain";
import Victory from "./victory/ChartMain";
import ECharts from "./eCharts/ChartMain";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/chartJS" element={<ChartMain />} />
          <Route exact path="/reCharts" element={<ReCharts />} />
          <Route exact path="/victory" element={<Victory />} />
          <Route exact path="/eCharts" element={<ECharts />} />
        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
