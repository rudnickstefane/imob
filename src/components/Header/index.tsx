import { Link } from 'react-router-dom';
import { Container } from './styles.d';

function Header() {
    return (
        <Container>
            <h1>iMob</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/entrar">Register</Link>
            </nav>
        </Container>
    );
}

export default Header;