import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PopupForm from "./components/PopupForm";
import CreateProfile from "./components/CreateProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateProfile/>}/>
        <Route path="/2" element={<PopupForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
