import Routes from './routes/Routes'

// Context 
import AppContext from './context/AppContext'
import useInitialState from './hook/useInitalState'

const App = () => {
  const initalState = useInitialState()
  return(
    <AppContext.Provider value={initalState}>
       <div className={"container-fluid p-0 bg wrapper__scan min-vh-100 position-relative "}>
         <Routes />
       </div>
    </AppContext.Provider>
  )
}

export default App;
