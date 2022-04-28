import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import ListTripsPage from '../pages/ListTripsPage'
import AdminHomePage from '../pages/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage'
import TripsDetailsPage from '../pages/TripDetailsPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ApplicationFormPage from '../pages/ApplicationFormPage'



export const Router = () => {




    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="login" element={<LoginPage/>}/>
                <Route path="trips" element={<ListTripsPage/>}/>
                <Route path="application" element={<ApplicationFormPage/>}/>
                <Route path="homeadmin" element={<AdminHomePage/>}/>
                <Route path="createtrip" element={<CreateTripPage/>}/>
                <Route path="tripsdetails" element={<TripsDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
