import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Route, Routes } from 'react-router-dom'
import LoadingPage from './pages/loadingPage'

const MainPage = lazy(() => import("./pages/mainPage"));
const Page404 = lazy(() => import("./pages/page404"));

function App() {

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={ <MainPage /> } />
        <Route path="/*" element={ <Page404 /> } />
      </Routes>
    </Suspense>
  );
}

export default App;
