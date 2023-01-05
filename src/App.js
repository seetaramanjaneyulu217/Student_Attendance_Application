import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Attendance from "./Components/Attendance";
import Table from "./Components/Table";


function App() {


  return (
     <>
        <Routes>
          <Route path="/" element={<Attendance />}>
            <Route path="details" element={<Table />}/>
          </Route>
        </Routes>
     </>
  );
}

export default App;
