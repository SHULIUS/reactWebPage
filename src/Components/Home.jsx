import React from 'react';
import Card from './Card_Container.jsx';
import Frame_Container from './Frame_Container.jsx';
import Footer_container from './Footer_container.jsx';

export default function Home() {
  return (
    <React.Fragment>
      <Card />
      <Frame_Container />
      <Footer_container />
    </React.Fragment>
  );
}
