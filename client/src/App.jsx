import { Route, Routes } from "react-router-dom";
import ArqueoPages from "./pages/ArqueoPages";
import ArqueoForm from "./pages/ArqueoForm";
import Navbar from "./components/Navbar";
import { ArqueoContextProvider } from "./context/arqueoProvider";



function App() {
  return (
    <>
      <Navbar />
      <ArqueoContextProvider>
        <Routes>
          <Route path="/" element={<ArqueoPages />} />
          <Route path="/ver/:id" element={<ArqueoForm />} />
        </Routes>
      </ArqueoContextProvider>
    </>
  )
}

export default App;
