import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import profile from '../img/profile.jpeg';
import iconFacebok from '../img/iconFacebook.png';
import iconGmail from '../img/iconGmail.png';
import iconInstagram from '../img/iconInstagram.png';
import iconTwitter from '../img/iconTwitter.png';

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Pongsapat Timtham</h2>
            <img
              src={profile}
              alt="avatar"
              style={{height: '250px', borderRadius: '50%'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', flexDirection: 'row'}}>
              <a href="https://www.facebook.com/golfpongsapat">
                  <img 
                    src={iconFacebok}
                    style={{width:'30px',height: '30px', padding: '5px'}}
                  />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                  <img 
                    src={iconGmail}
                    style={{width:'30px',height: '30px', padding: '5px'}}
                  />
              </a>
              <a href="https://www.instagram.com/golff.pst/?hl=th">
                  <img 
                    src={iconInstagram}
                    style={{width:'30px',height: '30px', padding: '5px'}}
                  />
              </a>
              <a href="https://twitter.com/golf60116425">
                  <img 
                    src={iconTwitter}
                    style={{width:'30px',height: '30px', padding: '5px'}}
                  />
              </a>
             </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    093-7318593
                  </ListItemContent>
                </ListItem>
                
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    golftimtham@gmai;.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    LINEID: gaalobcopy
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;