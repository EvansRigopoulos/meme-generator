import React from 'react';

function Header() {
  return (
    <header className='header-container'>
      <img
        src={require(`../images/troll-face.png`)}
        alt='troll_face'
        className='header-img'
      />
      <h1>Meme Generator</h1>
    </header>
  );
}

export default Header;
