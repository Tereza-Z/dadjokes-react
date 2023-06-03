import React, {useState} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Joke } from './Joke/index.jsx';
import { jokes } from './jokes';

const App = () => {
  return(
  <>
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </>
    )
}

createRoot(
  document.querySelector('#app'),
).render(<App />);

