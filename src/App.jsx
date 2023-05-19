import { lazy, Suspense } from 'react'
import Home from './pages/Home/Home'
// import Editor from './pages/Editor/Editor'
import { Routes, Route } from 'react-router-dom'

const Editor = lazy(() => import('./pages/Editor/Editor'))

const App = () => {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path="/new-document" element={<Suspense fallback={<h1>Loading...</h1>}><Editor /></Suspense>}></Route>
      </Routes>
    </>
  )
}

export default App