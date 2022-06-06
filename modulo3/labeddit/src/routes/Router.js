import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPostPage from '../pages/AddPostPage/AddPostPage';
import ErrorPage from '../pages/ErroPage/ErrorPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostDetailPage from '../pages/PostDetailPage/PostDetailPage';
import PostsListPage from '../pages/PostsListPage/PostsListPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import Header from '../components/Header/Header'



const Router = ({setRightButtonText}) => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage setRightButtonText={setRightButtonText} />} />
            <Route path="/cadastro" element={<SignUpPage setRightButtonText={setRightButtonText} />} />
            <Route index element={<PostsListPage />} />
            <Route path="/adicionar-post" element={<AddPostPage />} />
            <Route path="/detalhe/:id" element={<PostDetailPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}

export default Router;