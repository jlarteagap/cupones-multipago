import { useContext } from "react"
import AppContext from '../context/AppContext'
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
// componentes 
import HomePage from '../layout/Home'
import PasoUno from '../layout/PasoUno'
import PasoDos from '../layout/PasoDos'
import PasoTres from '../layout/PasoTres'

const Routes = () => {

const { home } = useContext(AppContext)
return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
            { home ? <HomePage /> : <Redirect to="/paso-uno" />}
            </Route>
            <Route path="/paso-uno" exact><PasoUno /></Route>
            <Route path="paso-dos" exact><PasoDos /></Route>
            <Route path="paso-tres" exact><PasoTres /></Route>
        </Switch>
    </BrowserRouter>
)}

export default Routes