import React, { Component } from 'react';

import api from '../../services/api';

import './styles.css';

export default class Description extends Component {
  state = {
    hero: [],
    powerstats: [],
    biography: [],
    work: [],
    images: "",
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    const hero = await api.get(`https://akabab.github.io/superhero-api/api/id/${id}.json`);

    let name = hero.data.name.toLowerCase().replace(" ", "-");
    const images = await api.get(`https://akabab.github.io/superhero-api/api/images/lg/${id}-${name}.jpg`);

    this.setState({
      hero: hero.data, images: images.config.url, powerstats: hero.data.powerstats, biography: hero.data.biography, work: hero.data.work
    })
  }

  render() {
    const { hero, powerstats, biography, work, images } = this.state;

    return (
      <div className="infos" >
        <div >
          <table>

            <thead>
              <h1>{hero.name}</h1>
            </thead>

            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{biography.fullName === "" ? hero.name : biography.fullName}</td>
              </tr>
              <tr>
                <th>Publisher</th>
                <td>{biography.publisher}</td>
              </tr>
              <tr>
                <th>First Apparence</th>
                <td>{biography.firstAppearance}</td>
              </tr>
              <tr>
                <th>Occupation</th>
                <td>{work.occupation}</td>
              </tr>
              <tr>
                <th>Base</th>
                <td>{work.base}</td>
              </tr>
              <tr>
                <th colspan="2">PowerStats</th>
              </tr>
              <tr>
                <td>intelligence</td>
                <td>{powerstats.intelligence}</td>
              </tr>
              <tr>
                <td>strength</td>
                <td>{powerstats.strength}</td>
              </tr>
              <tr>
                <td>speed</td>
                <td>{powerstats.speed}</td>
              </tr>
              <tr>
                <td>durability</td>
                <td>{powerstats.durability}</td>
              </tr>
              <tr>
                <td>power</td>
                <td>{powerstats.power}</td>
              </tr>
              <tr>
                <td>combat</td>
                <td>{powerstats.combat}</td>
              </tr>
            </tbody>

            <tfoot></tfoot>
          </table>
          <img src={images} alt={hero.name} />
        </div>
      </div >
    );
  }
}