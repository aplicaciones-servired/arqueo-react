import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArqueoPages from "./pages/ArqueoPages";
import ArqueoForm from "./pages/ArqueoForm"; 
import Navbar from "./components/Navbar";
import { ArqueoContextProvider } from "./context/arqueoProvider";



function App() {
  return (<div  className=" bg-slate-100">
    <Router>
      
        <Navbar />

        <ArqueoContextProvider>
          <Routes>
            <Route path="/" element={<ArqueoPages />} />
            <Route path="/ver/:id" element={<ArqueoForm />} />
          </Routes>
        </ArqueoContextProvider>
    
    </Router>
    </div>
  );
}

export default App;
