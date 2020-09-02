import React from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search/:searcgTerm">
            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <div className="app_page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>
      {/** Header */}
    </div>
  )
}

export default App
