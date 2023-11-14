import { Routes, Route, Navigate } from "react-router-dom";
import CupcakeList from "../CupcakeList";
import Form from "../Form";

function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<CupcakeList />} />
            <Route path="/add" element={<Form/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default RoutesList