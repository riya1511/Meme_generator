import React from "react";
import '../styles/style.css';

function Meme(){

    const [meme,changedMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(memeData => setAllMemeImage(memeData.data.memes))
    },[])

    const clickHandler = () => {
        const ranNum = Math.floor(Math.random() * allMemeImage.length);
        const url = allMemeImage[ranNum].url
        changedMeme(prevState => {
            return {
            ...prevState,
            randomImage: url
            }
        })
    }

    const handleChange = (event) =>{
        const {name,value} = event.target
        changedMeme(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    return(
        <div className="main">
            <div className="form">
                <input 
                    placeholder="Top text" 
                    className="form-input" 
                    type='text' 
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                ></input>
                <input 
                    placeholder="Bottom text" 
                    className="form-input" 
                    type='text' 
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange}
                ></input>
                <button className="form-button" type="submit" onClick={clickHandler}>Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img className="meme-img" src={meme.randomImage} alt="meme"></img>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </div>
    )
}

export default Meme