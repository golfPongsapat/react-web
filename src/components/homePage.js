import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profile from '../img/profile.jpeg';


class HomePage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={profile}
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Welcome to my site</h1>

            <hr/>
            
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default HomePage;