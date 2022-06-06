import axios from "axios";
import { BASE_URL } from '../constants/urls';


export const createPost = (body, clear, getPosts) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data);
        clear();
        getPosts();
    })
        .catch((err) => {
            alert(err.data)
            console.log(err)
        })
}

export const createComment = (id, body, clear, getPosts) => {
    axios.post(`${BASE_URL}/posts/${id}`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }).then((res) => {
        alert(res.data);
        clear();
        getPosts();
    })
        .catch((err) => {
            alert(err.data)
            console.log(err)
        })
}