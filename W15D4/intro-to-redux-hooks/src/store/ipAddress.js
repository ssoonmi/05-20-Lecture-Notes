import { ipUrl } from '../config';

const SET_IP = 'ipAddress/SET_IP';

export const setIP = ip => ({ type: SET_IP, ip });

export const loadIP = async () => {
  const response = await fetch(`${ipUrl}/ip`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    let { origin } = await response.json();
    // obscure last segment for privacy purposes
    origin = origin.split('.', 3).join('.') + ".xxx";
    return origin;
  }

};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_IP: {
      return {
        ...state,
        ip: action.ip,
      };
    }

    default: return state;
  }
}
