import SplashPage from './pages/SplashPage'
import HomePage from './pages/HomePage'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('homePage')

  const changePage = (pageName) =>
  {
    setPage(pageName)
  }

  if(page === 'homePage')
  {
    return (
      <div>
        <HomePage changePage={changePage}/>
      </div>
    );
  }
  else if(page === 'splashPage') 
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
