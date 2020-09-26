import React, { Component } from 'react';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import Description from '../../components/Description';

import api from '../../services/api';
import './styles.css';

export default class Content extends Component {

  state = {
    books: [],
  }

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = async () => {
    const response = await api.get('BATMAN');
    console.log(response.data.items)
    this.setState({ books: response.data.items });
  };

  render() {
    const { books } = this.state;

    return (
      <div>
        <Header />
        <Main />

        <div className="books">

          {books.map(book => (


            < article key={book.id} >


              <h2 className="title">
                {book.volumeInfo.title}
              </h2>

              <h3 className="autores">
                {book.volumeInfo.authors}
              </h3>

              <h4 className="categories">
                {book.volumeInfo.categories}
              </h4>
              <p className="description">
                {book.volumeInfo.description}
              </p>

              <img src="https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE" alt="bat" />
              {/* <img src={
                typeof (book.volumeInfo.imageLinks.thumbnail) !== undefined ? `${book.volumeInfo.imageLinks.thumbnail}` : "https://www.dccomics.com/sites/default/files/styles/character_thumb_160x160/public/Char_Profile_Batman_20190116_5c3fc4b40faec2.47318964.jpg?itok=u4BHrDeE"
              } alt="bat" /> */}

              <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer"> Acessar </a>


            </article>
          ))
          }
        </div >

        <Description />
        <Footer />
      </div >
    )
  }
}