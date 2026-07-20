import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Team from './pages/Team'
import TeamMember from './pages/TeamMember'
import Publications from './pages/Publications'
import EditorialWork from './pages/EditorialWork'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamMember />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/editorial-work" element={<EditorialWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App