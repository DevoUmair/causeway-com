import React,{useContext , createContext , useState} from 'react'

const CauswayContext = createContext();

function CauswayContextProvider({children}) {
  const [navStatus , setNavStatus] = useState(false)

  const values = {
      navStatus:navStatus,
      setNavStatus:setNavStatus
  }

  return (
    <CauswayContext.Provider value={values}>
             {children}
    </CauswayContext.Provider>
  )
}

export const useCausWayContext = () => (
    useContext(CauswayContext)
)

export default CauswayContextProvider