import { Outlet } from 'react-router-dom'

import { HeaderProjects } from './HeaderLayout'

export function ProjectDefaultLayout() {
  return (
    <div>
      <HeaderProjects />
      <Outlet />
    </div>
  )
}
