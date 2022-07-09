import React, { useContext, createContext, useState } from 'react';

type TloadingContext = {
  isLoading?: boolean;
  updateLoading(value: boolean): void;
}
type props = {
  children?: JSX.Element
}
const LoadingContext = createContext({} as TloadingContext)

const LoadingProvider: React.FC<props> = ({children}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const updateLoading = (value: boolean) =>{
    setLoading(value)
  }

  return (
    <LoadingContext.Provider value={{isLoading, updateLoading}}>
      {children}
    </LoadingContext.Provider>
  )
}
const useLoading = () =>{
  const loading = useContext(LoadingContext)

  return loading;
}
export {LoadingProvider, useLoading}