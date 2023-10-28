import RealestatePage from "./components/realestate/RealestatePage";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div class="flex flex-row bg-slate">
      <div class="flex flex-col w-1/6">
        <Sidebar />
      </div>
      <div class="flex flex-col w-5/6">
        <RealestatePage />
      </div>
    </div>
  );
}

export default App;
