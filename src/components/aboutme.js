import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
class About extends Component {
  render() {
    return (
      <Gallery photos={PHOTO_SET} />
  );
  }
}
const PHOTO_SET = [
  {
    src: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/44779572_749372288735599_4465010235274166272_n.jpg?_nc_cat=110&_nc_ht=scontent.fbkk22-1.fna&oh=05c8b8229bc5410ff4a5026ae2d750f3&oe=5C76FC66',
    width: 3,
    height: 3
  },
  {
    src: 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/44300741_745644015775093_6151340736441745408_n.jpg?_nc_cat=103&_nc_ht=scontent.fbkk22-2.fna&oh=9c69a5c577b2a8f51f54fa9d884d5fdc&oe=5C7D3CB1',
    width: 1,
    height: 1
  },
  {
    src: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/44698645_748484655491029_7146425594534690816_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk22-1.fna&oh=fb03547dd0b04a8b1f50d47d80ad6b48&oe=5C774BE3',
    width: 4,
    height: 3
  },
  {
    src: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/44532028_747399435599551_6965219348063453184_n.jpg?_nc_cat=108&_nc_ht=scontent.fbkk22-1.fna&oh=dbf758647d4c11154258af7e5284db12&oe=5C40AB09',
    width: 1,
    height: 1
  },
  {
    src: 'https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/44327455_745295522476609_4797536288481738752_n.jpg?_nc_cat=106&_nc_ht=scontent.fbkk22-2.fna&oh=08003e59dc3bac37dd8a6a416dab4706&oe=5C78CB6A',
    width: 4,
    height: 3
  },
  {
    src: 'https://scontent.fbkk22-1.fna.fbcdn.net/v/t1.0-9/44281394_745133972492764_7708392335452667904_n.jpg?_nc_cat=104&_nc_ht=scontent.fbkk22-1.fna&oh=6fd1fd7bb33946d1b71ff6e41da85d5f&oe=5C897660',
    width: 1,
    height: 1
  },
];
export default About;