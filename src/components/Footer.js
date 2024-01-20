import {useState} from 'react';

function Footer(){

    const [inputText, setText] = useState('hello');

    function handleChange(e){
        setText(e.target.value);
    }

    return (
        <div className="copyright">
            <p>Made with love by Myself</p>
            <label>
                First name: 
                <input value={inputText} onChange={handleChange} />
            </label>
            <p>You type: {inputText}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </div>
    );
}

export default Footer;