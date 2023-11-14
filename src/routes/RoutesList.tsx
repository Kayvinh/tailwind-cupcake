import { Routes, Route, Navigate } from "react-router-dom";
import CupcakeList from "../cupcake/CupcakeList";
import Form from "../common/Form";
import Homepage from "../Homepage";
import CupcakeDetail from "../cupcake/CupcakeDetail";

function RoutesList() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cupcakes" element={<CupcakeList />} />
            <Route path="/cupcakes/:id" element={<CupcakeDetail />} />
            <Route path="/add" element={<Form/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default RoutesList