import React, { Component } from "react";
import Header from "../header-app/header-app"
import SearchBar from "../search-app/search-app"
import CardsList from "../cards-list-app/cards-list"
import Footer from "../footer-app/footer-app"

import './app.css';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { label: 'Ford Transit', year: '1986-2022', description: 'Какая то бричка', id: 1, },
        { label: 'Peugeot Boxer', year: '2006-2022', description: 'Какая то бричка', id: 2, },
        { label: 'Citroen Jumper', year: '2006-2022', description: 'Какая то бричка', id: 3, },
        { image: '' , label: 'Volkswagen Transporter', year: '2006-2022', description: 'Какая то бричка', id: 4, },
        { label: 'Ford Transit', year: '1986-2022', description: 'Какая то бричка', id: 5, },
        { label: 'Peugeot Boxer', year: '2006-2022', description: 'Какая то бричкаe', id: 6, },
        { label: 'Citroen Jumper', year: '2006-2022', description: 'Какая то бричка', id: 7, },
        { label: 'Volkswagen Transporter', year: '2006-2022', description: 'Какая то бричка', id: 8, }

      ],
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <SearchBar />
        <CardsList
          posts={this.state.data}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

