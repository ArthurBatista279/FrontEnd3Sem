import "./header.css";

export default function Header() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/quemsomos">Quem Somos</Link>
            <Link to="/frutas">Frutas</Link>
            <Link to="/produtos">Produtos</Link>
        </nav>
    )
}