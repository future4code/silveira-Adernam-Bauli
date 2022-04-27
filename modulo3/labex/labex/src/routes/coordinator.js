import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const goToPage = (navigate, page) => {
    navigate(page)
}

export const useProtectPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        
        if(token === null) {
            goToPage(navigate, '/login')
        }
    }, )
}