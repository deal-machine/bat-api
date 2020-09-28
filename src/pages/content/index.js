import React, { Component } from 'react';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';

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
    const response = await api.get('all.json');
    this.setState({ heroes: response.data });
  };

  render() {
    const { heroes } = this.state;

    return (
      <div>
        <Header />
        <Main />

        <div className="heroes">

          {heroes.map(hero => (
            < a key={hero.id} href={hero.images.lg} target="_blank" rel="noopener noreferrer" >

              < article >


                <img src={hero.images.sm} alt="ola" />

                <h2 className="title"> {hero.name} </h2>


              </article>
            </a>
          ))
          }
        </div >

        <Footer />
      </div >
    )
  }
}