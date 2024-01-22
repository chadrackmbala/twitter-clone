import { useState } from "react";

import('../style/reset.css');
import('../style/App.css');

export default function Login({ onLoginSubmit }) {

    const [pseudoInput, setPseudoInput] = useState("");

    const handleLoginSubmit = () => {
        onLoginSubmit(pseudoInput);
    }

    return (
        <>
            <header>
                <h1>Login</h1>
            </header>
            <main>
                <label>Pseudo : </label>
                <input className="login-input" type="text"
                    value={pseudoInput}
                    onChange={
                        (e) => setPseudoInput(e.target.value)
                    } />
                <div>
                    <button className="login-btn" onClick={handleLoginSubmit}>
                        ACCEDER
                    </button>
                </div>
            </main>
        </>
    );
}