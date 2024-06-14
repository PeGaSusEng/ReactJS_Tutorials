import React, { useEffect } from 'react';
import './Tebak_angka.css';

function Tebakan_angka() {
    const [data, setData] = React.useState(null);
    const [output, setOutput] = React.useState('');

    useEffect(() => {
        const button = document.getElementById('button1');
        button.onclick = function () {
            const inputData = parseInt(document.getElementById('input').value);
            setData(inputData);
        };
    }, []);

    const handleGuess = () => {
        if (data === 999) {
            setOutput('ANDA BENAR');
        } else {
            setOutput('Maaf Salah');
        }
    };

    return (
        <>
            <div>
                <div className="Bagian_Judul">
                    <h1 id="h1">TEBAK ANGKA AJAIB (≧∇≦)ﾉ</h1>
                </div>
                <div className="Bagian_Input">
                    <label id="Label">Masukkan tebakan Anda:</label>
                    <br />
                    <input type="number" id="input" />
                </div>
                <div className="Submit">
                    <br />
                    <button type="button" id="button1" onClick={handleGuess}>
                        KIRIM
                    </button>
                </div>
                <div className="Bagian_Output">
                    {output && <h1>{output}</h1>}
                </div>
            </div>
        </>
    );
}

export default Tebakan_angka;
