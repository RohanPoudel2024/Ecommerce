import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import EcommerceLayout from './components/EcommerceLayout';
import ProductPage from './pages/ProductPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <MainContent />
      </div>
    </Router>
  );
}

function MainContent() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={EcommerceLayout} />
        <Route path="/product" component={ProductPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;