import profilephoto from './assets/icon.jpeg'
function Card () {
    return (
        <body>
            <div className="Bagian-Utama">
                <div className="Bagian-Foto">
                    <img src={profilephoto} />
                </div>
                <div className="Tulisan_h1">
                    <h2>Abin Code</h2>
                </div>
                <div className="Tulisan_p">
                    <p>I make Youtube videos and <br/>play video games</p>
                </div>
        </div>
        </body>

    );
}

export default Card