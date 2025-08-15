import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/layout.jsx'
import Loading from './pages/Loading.jsx'
import Error404 from './pages/Error404.jsx'

const Inicio = lazy(() => import('./pages/Inicio.jsx'))

export default function App() {

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path='inicio' element={<Navigate to='/' replace />} />
          {/* All the other endpoints */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* <Route path='/inicio' element={<Navigate to='/' replace />} /> */}
          {/* Error 404 */}
          <Route path='*' element={<Error404 />} />
        </Route>
      </Routes>
    </Suspense>
  )
}