import React from 'react';
import './styles.css';

import Links from '../Links';

const Main = () => {
  return (
    <section id="first-content">

      <div id="botoes_atalhos_main">

        <Links />

      </div>

      <div id="titulo">
        <h3><b>The oficial history of </b> Superman. </h3>
      </div>

      <div id="texto">
        <p>
          Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.
        <br /> <br />
        From his blue uniform to his flowing red cape to the "S" shield on his chest, Superman is one of the most immediately recognizable and beloved DC Super Heroes of all time. The Man of Steel is the ultimate symbol of truth, justice, and hope. He is the world's first Super Hero and a guiding light to all.

The tip of the spear in a revolution that would change the landscape of pop culture, Superman has spent the last eighty years redefining what it means to stand for truth, justice and the American way. The last survivor of the doomed planet Krypton, raised in the quiet heartland of Smallville, Kansas, Superman is as much a legend as he is a man: the gold standard of heroism, compassion and responsibility.</p>
      </div>

      <div id="frase">


        <strong>"</strong>
        <p>Tem que decidir que homem vai se tornar. E seja lá quem ele for... Ele vai mudar o mundo. </p>
        <br />
        <strong>"</strong>

      </div>


    </section >

  );
}

export default Main;