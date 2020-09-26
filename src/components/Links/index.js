import React from 'react';
import './styles.css';

import morcego from '../../assets/icons/super-homen.png';
import facebook from '../../assets/icons/facebook.png';
import youtube from '../../assets/icons/youtube.png';
import twitter from '../../assets/icons/twitter.png';

const Links = () => {
  return (
    <div id="botoes_atalhos">

      <a href="https://www.dccomics.com/characters/superman" target="_blank" rel="noopener noreferrer"><img src={morcego} alt="superman" /></a>

      <a href="https://www.facebook.com/superman" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="superman facebook" /></a>

      <a href="https://twitter.com/DCSuperman" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="superman twitter" /></a>

      <a href="https://www.dccomics.com/videos/nycc-2012-superman-101" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="superman videos" /></a>

    </div>
  );
}
export default Links;
