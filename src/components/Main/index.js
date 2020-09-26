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
        <h3><b>A história oficial do </b> Batman. </h3>
      </div>

      <div id="texto">
        <p>
          Um dos mais famosos personagens da DC Comics, Batman é um super-herói americano, criado por Bill Finger e pelo desenhista Bob Kane. Sua primeira aparição nos quadrinhos da DC foi em maior de 1939, inicialmente a grafia do seu nome é Bat-Man, mas já teve vários apelidos: Homem Morcego, O Cruzado de Capa, O Cavaleiro das Trevas, entre outros.
        <br /> <br />
        Bruce Wayne é a identidade secreta do Batman, um milionário norte-americano, empresário, filantropo e dono das indústrias Wayne Enterprises. O seu trauma foi testemunhar o assassinato dos seus pais enquanto criança, Wayne jurou vingança contra os criminosos, um juramento moderado por um sentido de justiça. Wayne treina então a si próprio, tanto física como intelectualmente, e cria uma persona inspirada no morcego para combater o crime: Batman. Toda sua história acontece na cidade fictícia de Gotham City, e é ajudado por outros personagens incluindo o seu mordomo Alfred Pennyworth, o comissário da policia Jim Gordon, e outros aliados vigilantes como Robin.
        </p>
      </div>

      <div id="frase">


        <strong>"</strong>
        <p>Qualquer um pode ser herói. Até uma pessoa que põe um casaco nos ombros de um menino para mostrar que o mundo não acabou (...) </p>
        <br />
        <strong>"</strong>

      </div>


    </section >

  );
}

export default Main;