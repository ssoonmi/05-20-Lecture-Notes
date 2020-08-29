import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";

import LogoutButtonRedux from "./LogoutButtonRedux";
import PokemonFormRedux from "./PokemonFormRedux";
import Fab from "./Fab";
import { getPokemon, createPokemon } from "./store/pokemon";
import { connect } from "react-redux";
import PokemonDetailRedux from "./PokemonDetailRedux";

class PokemonBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
    };
  }

  componentDidMount() {
    this.props.getPokemon();
  }

  handleCreated = async (pokemon) => {
    try {
      const res = await this.props.createPokemon(pokemon);
      const data = await res.json();
      if (res.ok) {
        this.props.history.push(`/pokemon/${data.id}`);
        this.setState({
          showForm: false,
        });
      }
    } catch(e) {}
  };

  showForm = () => {
    this.setState({
      showForm: true,
    });
  };
  hideForm = () => {
    this.setState({
      showForm: false,
    });
  };

  render() {
    if (!this.props.pokemon) {
      return null;
    }
    return (
      <main>
        <LogoutButtonRedux />
        <nav>
          <Fab hidden={this.state.showForm} onClick={this.showForm} />
          {this.props.pokemon.map((pokemon) => {
            return (
              <NavLink key={pokemon.name} to={`/pokemon/${pokemon.id}`}>
                <div className="nav-entry">
                  <div
                    className="nav-entry-image"
                    style={{ backgroundImage: `url('${pokemon.imageUrl}')` }}
                  ></div>
                  <div>
                    <div className="primary-text">{pokemon.name}</div>
                    <div className="secondary-text">
                      Born {new Date(pokemon.updatedAt).toDateString()}
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </nav>
        {this.state.showForm ? (
          <PokemonFormRedux 
            handleCreated={this.handleCreated} 
            hideForm={this.hideForm} 
          />
        ) : (
          <Route
            path="/pokemon/:id"
            component={PokemonDetailRedux}
          />
        )}
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemon: (pokemon) => dispatch(getPokemon(pokemon)),
    createPokemon: (pokemon) => dispatch(createPokemon(pokemon)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonBrowser);
