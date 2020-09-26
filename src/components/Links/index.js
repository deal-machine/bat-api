import React from 'react';
import './styles.css';

import morcego from '../../assets/icons/homem-morcego.png';
import facebook from '../../assets/icons/facebook.png';
import youtube from '../../assets/icons/youtube.png';
import twitter from '../../assets/icons/twitter.png';

const Links = () => {
  return (
    <div id="botoes_atalhos">

      <a href="https://www.dccomics.com/characters/batman" target="_blank" rel="noopener noreferrer"><img src={morcego} alt="batman" /></a>

      <a href="https://www.facebook.com/batman" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="batman facebook" /></a>

      <a href="https://twitter.com/DCBatman" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="batman twitter" /></a>

      <a href="https://www.youtube.com/watch?v=0pcqq-7MJSI&feature=emb_logo&ab_channel=DC" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="batman videos" /></a>

    </div>
  );
}
export default Links;
