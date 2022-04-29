import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingPage from './pages/loadingPage'

const MainPage = lazy(() => import("./pages/mainPage"));
const Page404 = lazy(() => import("./pages/page404"));

function App() {

  return (
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/404" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
