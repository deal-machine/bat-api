import React from 'react';
import './styles.css';

import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';
import whatsapp from '../../assets/icons/whatsapp.png';

const Links = () => {
  return (
    <div id="botoes_atalhos">

      <a href="https://github.com/deal-machine" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>

      <a href="https://www.linkedin.com/in/95deal/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>

      <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" /></a>

      <a href="https://twitter.com/doug4lc" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="twitter" /></a>

    </div>
  );
}
export default Links;
