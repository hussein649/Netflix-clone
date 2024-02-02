import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Banner from '../../Banner/Banner'
import Rowlist from '../../Rows/RowList/Rowlist'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
}

export default Home