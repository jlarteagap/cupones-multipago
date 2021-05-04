import { useContext } from 'react'
import AppContext from '../../context/AppContext'

// image 
import hand from '../../assets/img/hand1.png'
import TextHome from './TextHome'
const Home = () => {
    const { skipHome } = useContext(AppContext)
    return(
        <div className="col-12 col-md-10 mx-auto">
            <div className="row row vh-100 d-flex align-items-center">
                <div className="col-12 col-md-6">
                    <TextHome skipHome = {skipHome}/>
                </div>
                <div className="col-12 col-md-6 vh-100 home__hand">
                    <img className="img-fluid home--img" src={hand} alt="" />
                </div>
            </div>
        </div> 
    )
}
export default Home