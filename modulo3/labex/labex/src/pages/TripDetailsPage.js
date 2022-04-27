import React, { useState, useEffect, } from "react";
import styled from 'styled-components';
import { useNavigate, useHistory } from 'react-router-dom'
import { goToPage, useProtectPage } from "../routes/coordinator";
import axios from "axios";


function TripDetailsPage() {
    useProtectPage()
        
    

    return (
        <div>
            Esta é a TripsDetailsPage!
        </div>
    )
}


export default TripDetailsPage;