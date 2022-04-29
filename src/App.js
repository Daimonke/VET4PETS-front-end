import './App.css';
import { Suspense, lazy } from 'react';
import LoadingPage from './pages/loadingPage'

const MainPage = lazy(() => import("./pages/mainPage"));

function App() {

  return (
    <Suspense fallback={<LoadingPage />}>
          <MainPage />
    </Suspense>
  );
}

export default App;
