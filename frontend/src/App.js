import Dashboard from "./components/realestate/Dashboard";
import RealestatePage from "./components/realestate/RealestatePage";
import Sidebar from "./components/sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="flex flex-row bg-slate">
      <BrowserRouter>
        <div class="flex flex-col w-1/6">
          <Sidebar />
        </div>
        <div class="flex flex-col w-5/6">
          <Routes>
            <Route path="/realestate/manage" element={<RealestatePage />} />
            <Route path="/realestate/dashboard" element={<Dashboard />} />
            <Route path="/realestate/chat" element={<h1>Chat</h1>} />
            {/* <route path="*" element={<h1>Not Found</h1>} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
