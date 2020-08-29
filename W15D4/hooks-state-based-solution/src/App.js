import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

import LoginPanel from './LoginPanel';
import PokemonBrowser from './PokemonBrowser';
import { PrivateRoute } from './routesUtil';

function getCurrentUserId() {
  const authToken = Cookies.get("token");
  if (authToken) {
    try {
      const payload = authToken.split(".")[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      return data.id;
    } catch (e) {
      Cookies.remove("token");
    }
  }
}

function App() {
  const [currentUserId, setCurrentUserId] = useState(getCurrentUserId());
  const [loaded, setLoaded] = useState(false);
  const [needLogin, setNeedLogin] = useState(!currentUserId);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`/api/pokemon`);
      if (response.ok) {
        const pokemon = await response.json();
        setPokemon(pokemon);
        setNeedLogin(false);
      } else {
        setNeedLogin(true);
      }
      setLoaded(true);
    }
    fetchPokemon();
  }, [currentUserId])

  const handleCreated = (newPokemon) => {
    setPokemon([...pokemon, newPokemon]);
  };

  const updateUser = (userId) => {
    if (userId) {
      setNeedLogin(false);
      setCurrentUserId(userId);
    } else {
      setCurrentUserId(null);
      setNeedLogin(true);
    }
  };

  if (!loaded) {
    return null;
  }

  const cProps = {
    pokemon,
    handleCreated,
    currentUserId,
    updateUser
  };
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login"
          render={props => (
            <LoginPanel {...props} 
              updateUser={updateUser} 
              currentUserId={currentUserId} 
            />
          )} 
        />
        <PrivateRoute path="/"
                      exact={true}
                      needLogin={needLogin}
                      component={PokemonBrowser}
                      cProps={cProps} />
        <PrivateRoute path="/pokemon/:pokemonId"
                      exact={true}
                      needLogin={needLogin}
                      component={PokemonBrowser}
                      cProps={cProps} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
