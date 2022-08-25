import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Main from './pages';

function App() {
  return (
    <div className="">
      <Layout>
        <Main/>
      </Layout>
    </div>
  );
}

export default App;
