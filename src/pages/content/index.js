import React, { Component } from 'react';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Description from '../../components/Description';

import api from '../../services/api';
import './styles.css';

export default class Content extends Component {

  state = {
    heroes: [],
  }

  componentDidMount() {
    this.loadHeroes();
  }

  loadHeroes = async () => {
    const response = await api.get('Vegeta');
    (response.data.response === 'success' ? console.log("OK") : console.log("NOT OK"))
    this.setState({ heroes: response.data.results });
  };

  render() {
    const { heroes } = this.state;

    return (
      <div>
        <Header />
        <Main />

        <div className="heroes">

          {heroes.map(hero => (
            // < a  href={hero.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer" >
            < article key={hero.id}>

              <h2 className="title">
                {hero.name}
              </h2>

              <h3 className="autores">
                {hero.biography.publisher}
              </h3>

              <h4 className="categories">
                {hero.biography.fullName}
              </h4>
              <div id="content">
                <p className="description">
                  {hero.connections.groupAffiliation}
                </p>

                <img src={`${hero.image.url}`} alt="superman" />

              </div>


            </article>
            // </a>
          ))
          }
        </div >

        <Description />
        <Footer />
      </div >
    )
  }
}