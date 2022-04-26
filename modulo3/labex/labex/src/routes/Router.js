import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ListTripsPage from '../pages/ListTripsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"




export const Router = () => {




    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage/>}/>
                <Route path="trips" element={<ListTripsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
