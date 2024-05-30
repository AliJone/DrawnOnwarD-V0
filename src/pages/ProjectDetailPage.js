/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import PortfolioDetail from 'parts/PortfolioDetail';
import Footer from 'parts/Footer';
import { Helmet } from 'react-helmet';

import Data from 'json/landingPage.json';

export default class ProjectDetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const detailData = Data.portfolio.filter((item) => item.id === `${this.props.match.params.id}`);

    return (
      <>
        <Helmet>
          <title>Project Details - DrawnOnwarD</title>
          <meta name="description" content={`Detailed information about project ${detailData.length === 1 ? [detailData[0].title] : ' '}.`} />
          <meta name="title" content="Project Details - DrawnOnwarD" />
          <meta name="description" content={`Detailed information about project ${detailData.length === 1 ? [detailData[0].title] : ' '}.`} />
        </Helmet>
        <Header {...this.props} />
        <PortfolioDetail data={detailData.length === 1 ? [detailData[0]] : null} />
        <Footer />
      </>
    );
  }
}
