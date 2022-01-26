import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

const Logout = () => {
  let { push } = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.post('http://localhost:9000/api/logout', {
        headers: {
          authorization: token
      }
      }).then(resp => {
        console.log("response", resp)
        localStorage.removeItem("token");
        push('/');
      }).catch(err => {
        console.error(err);
      })
  }, []);

  return(<div></div>);

};

export default Logout;
