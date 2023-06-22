import React from 'react'
import TopNav from '../header/TopNav';
import Footer from '../footer/Footer';
import Hero from './Hero'
import Product from './Product';
import Subscribe from './Subscribe';
import BookSession from './BookSession';
const index = () => {
  return (
    <div style={{ overflowX: 'hidden' }}>
        <TopNav />
        <Hero />
        <Product />
        <BookSession />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default index