import { Link } from 'react-router-dom'
import './style.css'

function Header() {
    return (
        <>

            <header>

                <h1>não</h1>

                <hr />
                <Link to='/'>
                    <button>Home</button>
                </Link>

                <br />
                <Link to='/about'>
                <button>Sobre</button>
                </Link>

            </header>

        </>
    )
}
export default Header