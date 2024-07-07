import CenteredContainer from "./Container";



export function Header() {
    return (
        <header className="flex flex-row justify-between h-16 bg-gray-700">
            <CenteredContainer className="flex flex-row justify-between items-center">
                <h1>PDV</h1>
                <nav className="flex flex-row">
                    <ul className="flex items-center space-x-4">
                    <li>
                        <a href="/login">Login</a>
                    </li>
                    <li>
                        <a href="/register">Register</a>
                    </li>
                    </ul>
                </nav>
            </CenteredContainer>
        </header>
    );
}