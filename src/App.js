import './App.css';
import { Suspense } from 'react';
import LoadingPage from './pages/loadingPage'
import MainPage from './pages/mainPage';

function App() {

  return (
    <Suspense fallback={<LoadingPage />}>
          <MainPage />
    </Suspense>
  );
}

export default App;
