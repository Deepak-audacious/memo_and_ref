import React from 'react'
import Memo from './component/usememo'
import Timer from './component/useeffect'
import Ref from './component/useref'
import MultiRef from './component/multiRef'
const App = () => {
  return (
    <div>
      <Memo/>
      <Timer />
      <Ref />
      <MultiRef />
    </div>
  )
}

export default App
