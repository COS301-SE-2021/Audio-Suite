import { useState } from 'react'

import Login from '../components/Login'
import Signup from '../components/Signup'
import HomeNavbar from '../components/HomeNavbar'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

const SplashPage = ({setJWT, changePage}) =>
{
    const [pageType, setPageType] = useState('loginPage')
    

    const changePageType = (pageType) =>
    {
        setPageType(pageType)
    }
    
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h1>{pageType === 'loginPage' ? 'Login Page' : 'Signup page'}</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <HomeNavbar changePage={changePage} pageType={pageType}/>
            {pageType === 'loginPage' ? <Login setJWT={setJWT} onLogin={changePage} onChangePageType={changePageType}/> : <Signup onChangePageType={changePageType}/>}
        </>
    )
}

export default SplashPage