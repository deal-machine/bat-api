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
    const response = await api.get('SUPERMAN');
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

            <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
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
                <div id="content">
                  <p className="description">
                    {book.volumeInfo.description}
                  </p>

                  <img src={
                    typeof (book.volumeInfo.imageLinks.thumbnail) !== undefined ? `${book.volumeInfo.imageLinks.thumbnail}` : "http://books.google.com/books/content?id=slG2DQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                  } alt="superman" />

                </div>


              </article>
            </a>
          ))
          }
        </div >

        <Description />
        <Footer />
      </div >
    )
  }
}