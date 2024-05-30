/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroPortfolio from 'parts/HeroPortfolio';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllPortfolio from 'parts/AllPortfolio';
import { Helmet } from 'react-helmet';

import Data from 'json/landingPage.json';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Our Projects - DrawnOnwarD</title>
          <meta name="description" content="Explore our diverse range of projects that showcase our expertise and commitment to excellence." />
          <meta name="title" content="Our Projects - DrawnOnwarD" />
          <meta name="description" content="Explore our diverse range of projects that showcase our expertise and commitment to excellence." />
        </Helmet>
        <Header {...this.props} />
        <HeroPortfolio {...this.props} />
        <AllPortfolio data={Data.portfolio} />
        <Discuss {...this.props} />
        <Footer />
      </>
    );
  }
}
