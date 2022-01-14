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
        { image: <img src="https://images.unsplash.com/photo-1530226438127-d6a61eb82ac8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/> ,label: 'Ford Transit', year: '1986-2022', description: 'Какая то бричка', id: 1, },
        { image: <img src="https://images.unsplash.com/photo-1605663485884-1f1c37b1f55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>, label: 'Peugeot Boxer', year: '2006-2022', description: 'Какая то бричка', id: 2, },
        { image: <img src="https://images.unsplash.com/photo-1623587672045-0619ca96029f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>, label: 'Citroen Jumper', year: '2006-2022', description: 'Какая то бричка', id: 3, },
        { image: <img src="https://images.unsplash.com/photo-1532383911524-17cd3daf08cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>, label: 'Volkswagen Transporter', year: '2006-2022', description: 'Какая то бричка', id: 4, },
        { image: <img src="https://images.unsplash.com/photo-1533559662493-65ffecb14f7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80" alt=""/>, label: 'Ford Transit', year: '1986-2022', description: 'Какая то бричка', id: 5, },
        { image: <img src="https://images.unsplash.com/photo-1594902063765-45ff9ea83a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>, label: 'Peugeot Boxer', year: '2006-2022', description: 'Какая то бричкаe', id: 6, },
        { image: <img src="https://images.unsplash.com/photo-1631364844551-a7d109798809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt=""/>, label: 'Citroen Jumper', year: '2006-2022', description: 'Какая то бричка', id: 7, },
        { image: <img src="https://images.unsplash.com/photo-1584824345880-fbde806b3d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>, label: 'Volkswagen Transporter', year: '2006-2022', description: 'Какая то бричка', id: 8, }

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

