

import { Suspense } from 'react'
import './App.css'
import Countries from './components/countries/Countries'
const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Suspense fallback={<h1>Nadir bhai is loading</h1>}>
      <Countries countriesPromise={countriesPromise} />
    </Suspense>
      
    </>
  )
}

export default App
