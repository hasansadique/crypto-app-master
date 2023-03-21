import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Cryptocurrencies, CryptoDetails, Exchanges, Homepage, Navbar, News } from './components'
import './App.css'

const App = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact element={<Homepage />}
                path="/" />
              <Route exact element={<Exchanges />}
                path="/exchanges" />
              <Route
                exact
                element={<Cryptocurrencies />}
                path="/cryptocurrencies"
              />
              <Route
                exact element={<CryptoDetails />}
                path="/crypto/:coinId" />
              <Route
                exact element={<News />}
                path="/news" />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2023
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>

    </div>
  )
}

export default App

