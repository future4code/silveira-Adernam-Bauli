import axios from "axios";
import { BASE_URL } from '../constants/urls';


export const votePost = (vote, id, getPosts) => {
    const URL = `${BASE_URL}/posts/${id}/votes`;
    const body = {
        direction: vote,
    };
    const headers = {
        headers: {
            Authorization: localStorage.getItem("token"),
        },
    };
    axios
        .post(URL, body, headers)
        .then((res) => {
            getPosts();
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};