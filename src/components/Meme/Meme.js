import React, { useState } from 'react';

import './meme.css';
export default function Meme() {
  let url;

  // const [memeUrl, setMeme] = useState("");
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  React.useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemeImages(data.data.memes);
    }
    getMemes();
  }, []);

  function randomElement(item) {
    const randomEl = Math.floor(Math.random() * allMemeImages.length);
    url = allMemeImages[randomEl].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <div className="meme">
      <div action="" className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={randomElement} className="form--button">
          Get new meme image
        </button>
      </div>
      <div className="memeBlock">
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
        <img src={meme.randomImage} alt="" className="meme--img" />
      </div>
      <div className="space-div"></div>
    </div>
  );
}
