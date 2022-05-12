import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p style={{color:'black'}}>Copyright &copy; 2021</p>
            <Link to='about'>About</Link>
        </footer>
    )
}

export default Footer
