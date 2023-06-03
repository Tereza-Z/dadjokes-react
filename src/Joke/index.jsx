import React, {useState} from "react";
import { jokes } from "../jokes";


export const Joke = ({userAvatar, userName, text, likes, dislikes}) => {

    const [likesCount, setLikesCount] = useState(0)
    const [dislikesCount, setDislikesCount] = useState(0)

    return(
    <>
    <div className="container">
    <div className="joke">
        <div className="joke__body">
        <div className="joke__user">
            <img className="user-avatar" src={userAvatar}/>
            <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>

        </div>
        <div className="joke__likes">
        <button id="btn-up" className="btn-like btn-like--up" onClick={() => setLikesCount(likesCount + 1)}></button>
        <span id="likes-up" className="likes-count likes-count--up">{likesCount}</span>
        <button id="btn-down" className="btn-like btn-like--down" onClick={() => setDislikesCount(dislikesCount + 1)}></button>
        <span id="likes-down" className="likes-count likes-count--down">{dislikesCount}</span>
        </div>
    </div>
    </div>
    </>)
}


