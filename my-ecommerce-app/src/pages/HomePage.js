import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <div>
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
};

export default HomePage;