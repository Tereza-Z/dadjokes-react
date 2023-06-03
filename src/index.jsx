import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { jokes } from './jokes.jsx';

const App = () => {

  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)


  return ( 
    <>
    <div className="container">
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src="./img/user01.png"/>
          <p className="user-name">Neroxx</p>
        </div>

        <p className="joke__text">The secret service isn't allowed to yell "Get down!" 
        anymore when the president is about to be attacked. Now they have to yell "Donald, duck!"
        </p>

      </div>
      <div className="joke__likes">
        <button id="btn-up" className="btn-like btn-like--up" onClick={() => setLikes(likes + 1)}></button>
        <span id="likes-up" className="likes-count likes-count--up">{likes}</span>
        <button id="btn-down" className="btn-like btn-like--down" onClick={() => setDislikes(dislikes + 1)}></button>
        <span id="likes-down" className="likes-count likes-count--down">{dislikes}</span>
      </div>
    </div>
  </div>
  </>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);