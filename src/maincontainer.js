import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import FullWidthGrid from './grid';
import Navbar from './components/navbar';
import MainContent from './maincontent';
import Social from './components/social';
import Rules from './rules';
import RectangleGoogleAds from './GoogleAds/rectangle';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
        <Navbar  />
        <MainContent/>
      <Container maxWidth="xl">
        <FullWidthGrid />
      </Container>
      <Rules />
      <Container maxWidth="md">
      <RectangleGoogleAds slot='7900942379'/>
      </Container>
      <Social position='relative'/>
    </React.Fragment>
  );
}