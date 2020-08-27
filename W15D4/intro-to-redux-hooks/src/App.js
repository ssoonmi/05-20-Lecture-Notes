import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadIP, setIP } from './store/ipAddress';

const App = props => {
  const [loading, setLoading] = useState(false);
  const { ip } = useSelector(state => state.ipAddress);
  const dispatch = useDispatch();

  const getMyIP = async () => {
    dispatch(setIP(""));

    const origin = await loadIP();
    dispatch(setIP(origin));
  };

  useEffect(() => {
    setLoading(ip === "");
  }, [ip]);

  return (
    <div>
      <h1>Get My IP</h1>

      {loading
        ? <p>Loading...</p>
        : <p>{ip}</p>
      }
      <button
          onClick={getMyIP}
          disabled={loading}
      >{ip ? 'Again' : 'Go'}</button>
    </div>
  );
};

export default App;
