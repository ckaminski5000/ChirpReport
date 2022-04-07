import './header.css'
import { Container, Row, Col, Nav } from 'react-bootstrap'

const api_key = 'Gy4r3p85QUk4lNutVeM1BAvzM'
const api_key_secret = 'fXCouwarjX9qNd7XvUzp5Kd6x6fjFbbSW8tdPXRMmAwlo526xg'
const bearer_token = 'AAAAAAAAAAAAAAAAAAAAADD9bAEAAAAAemobgtFZ8GqjE%2FopVvVItccAcOQ%3DlTqGu2htNRwHORepgWkaGOw63jmmvmtm87AAN9JmiS95IHcLgv'



export function Header(props){

    return(
        <div className="headerContainer" style={{maxWidth:'100%', margin: 0, padding: 10, marginBottom: 10}}>
            <div className='headerbg logo'>
                Chirp Report
            </div>
        </div>
    )
}