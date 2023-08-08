import React, { useState } from 'react';
import {createJukeboxPage} from '../api/Jukebox';

export default function JukeboxPage() {
    const [inputText, setInputText] = useState('');
    const [resultUrl, setResultUrl] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    async function createJukeboxPage(text: String){
        try{
            const data = await createJukeboxPage(text);
            console.log(data);
            setResultUrl(data)
        } catch (e){
            console.log(e);
        }
    }


    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button onClick={crea}>Search</button>
            {resultUrl && <a href={resultUrl}>Result Link</a>}
        </div>
    );
};