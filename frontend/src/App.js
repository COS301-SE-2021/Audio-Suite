import SplashPage from './pages/SplashPage'
import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import UserSettingsPage from './pages/UserSettingsPage'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('homePage')
  const [userJWT, setUserJWT] = useState('')

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
        <SplashPage changePage={changePage} setJWT={setUserJWT}/>
      </div>
    );
  }
  else if(page === 'userPage') 
  {
    return (
      <div>
        <UserPage changePage={changePage} userJWT={userJWT} />
      </div>
    );
  }   
  else if(page === 'userSettingsPage') 
  {
    return (
      <div>
        <UserSettingsPage/>
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
