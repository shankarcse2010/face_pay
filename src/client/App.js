import { useEffect, useState } from 'react';
import { setIntialNavigation, getStorage, setStorage } from '../utils'
import Landing from './landing'
import Register from './register'
import Process from './process'

const components = {
  landing: Landing,
  register: Register,
  process: Process
}

function App() {
  const [page, setPage] = useState('landing')
  setIntialNavigation();
  useEffect(() => {
    setPage(getStorage('page'))
  }, [page])
  function goToPage(happeningPage) {
    setStorage('page', happeningPage)
    setPage(happeningPage)
  }

  const Currentpage = components[page]
  return (
    <div className="face-pay-root" key={page}>
      <Currentpage goToPage={goToPage} />
    </div>
  );
}

export default App;
