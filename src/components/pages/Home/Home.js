import React from 'react';
import Login from '../../Forms/Login/Login';
import CenteredContainer from '../../utils/Containers/CenteredContainer';
import './Home.scss';

const Home = () => {
  return (
    <React.Fragment>
      <div className="bg-primary">
      <CenteredContainer>
        <Login />
      </CenteredContainer>
      </div>
    </React.Fragment>
  )
}

export default Home