import React from 'react';

import './styles.css'

const Description = () => {
  return (
    <div className="infos" >
      <div >
        <h1>Character Facts</h1>
        <table>
          <tr>
            <th>Powers</th>
            <td>exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology</td>
          </tr>
          <tr>
            <th>First Appearance</th>
            <td>DETECTIVE COMICS #27 (1939)</td>
          </tr>
          <tr>
            <th>Alias/Alter Ego</th>
            <td>Bruce Wayne</td>
          </tr>
          <tr>
            <th>AKA</th>
            <td>Dark Knight, Caped Crusader, Matches Malone</td>
          </tr>
          <tr>
            <th>Base of Operations</th>
            <td>Gotham City</td>
          </tr>
        </table>
      </div>

    </div >
  );
}
export default Description;