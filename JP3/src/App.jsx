import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Loading from './pages/Loading/Loading.jsx'
import NotFound from './pages/Error/NotFound/NotFound.jsx'

const Home = lazy(() => import('./pages/Home/Home.jsx'))

export default function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='home' element={<Navigate to='/' replace />} />
          {/* All the other endpoints */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* Error 404 */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}