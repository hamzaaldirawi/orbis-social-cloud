import { Fragment, lazy, Suspense } from 'react'
import { GlobalStyle } from './globalStyle'
import { Container } from 'react-bootstrap'

import Spinner from './components/spinner'
const Header = lazy(() => import('./components/header'))
const UpperSection = lazy(() => import('./components/upperSection'))
const DownSection = lazy(() => import('./components/downSection'))
const Footer = lazy(() => import('./components/footer'))

function App() {
  return (
    <Fragment>
      <GlobalStyle />
        <Suspense fallback={() => (<Spinner />)}>
          <Container>
            <Header />
            <UpperSection />
            <DownSection />
          </Container>
          <Footer />
        </Suspense>
    </Fragment>
  );
}

export default App;
