import SplashPage from './pages/SplashPage'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('splashPage')

  const changePage = (pageName) =>
  {
    setPage(pageName)
  }

  if(page === 'splashPage') 
  {
    return (
      <div>
        <SplashPage changePage={changePage}/>
      </div>
    );
  }
  else
  {
    return (
      <div>
        Not splashPage
      </div>
    );
  }
}

export default App;
