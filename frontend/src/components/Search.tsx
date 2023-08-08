import React, { useState } from 'react';
import {createPage} from '../api/Jukebox';

export default function JukeboxPage() {
    const [inputText, setInputText] = useState('');
    const [resultUrl, setResultUrl] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    async function createJukeboxPage(text: String){
        try{
            const data = await createPage(text);
            console.log(data);
            setResultUrl(data.data)
            return;
        } catch (e){
            console.log(e);
        }
    }


    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button onClick={() => createJukeboxPage(inputText)}>Create</button>
            {resultUrl && <a href={resultUrl}>Result Link</a>}
        </div>
    );
};