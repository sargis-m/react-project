import React from 'react';

import {Instructions} from '../Instructions/Instructions.js';
import Profile from '../Profile/Profile.js';
import StateDemo from '../StateDemo/StateDemo';
import UseEffectDemo from '../UseEffectDemo/UseEffectDemo';
import Users from '../Users/Users';

import './App.css';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
    {
        emoji: '😀',
        name: "test grinning face"
    },
    {
        emoji: '🎉',
        name: "party popper"
    },
    {
        emoji: '💃',
        name: "woman dancing"
    }
];

function App() {
    const greeting = "greeting";
    const displayAction = false;
    return (
        <div className="container">
            <h1 id={greeting}>Hello, World</h1>
            {displayAction && <p>I am writing JSX</p>}
            <Instructions/>
            <ul>
                {
                    emojis.map(emoji => (
                        <li key={emoji.name}>
                            <button onClick={displayEmojiName}>
                                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                            </button>
                        </li>
                    ))
                }
            </ul>

            <div>
                <Profile/>
            </div>

            <div>
                <StateDemo/>
            </div>

            <div>
                <UseEffectDemo/>
            </div>

            <div>
                <Users/>
            </div>
        </div>
    )
}

export default App;