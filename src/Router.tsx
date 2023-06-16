import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { About } from './pages/About'
import { DefaultLayout } from './DefaultLayout'
import { Media } from './pages/Media'
import { ProjectDefaultLayout } from './ProjectsLayout'
import { ProjectAboutOS } from './pages/AboutProjects/ProjectOS'
import { ProjectAboutCD } from './pages/AboutProjects/ProjectCD'
import { ProjectAboutLP } from './pages/AboutProjects/ProjectLP'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/media" element={<Media />} />
      </Route>
      <Route path="/aboutProjects" element={<ProjectDefaultLayout />}>
        <Route path="/aboutProjects/projectOS" element={<ProjectAboutOS />} />
        <Route path="/aboutProjects/projectCD" element={<ProjectAboutCD />} />
        <Route path="/aboutProjects/projectLP" element={<ProjectAboutLP />} />
      </Route>
    </Routes>
  )
}
