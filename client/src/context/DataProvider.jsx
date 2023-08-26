import React, { useState } from 'react'
import { createContext } from 'react';

export const DataContext = createContext(null);

function DataProvider({children}) {

    const [account, setAccount] = useState('')
    const [token, setToken] = useState('')

  return (
    <DataContext.Provider value={{
        account, 
        setAccount,
        token,
        setToken
    }}>
        {children} 
    </DataContext.Provider>
  )
}

export default DataProvider