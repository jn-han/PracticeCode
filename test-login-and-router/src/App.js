import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div>
                <Navigation />
                <Route exact path='/' component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
            </div>
        </Router>
    );
}
function Navigation() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </nav> 
    );
}

function HomePage() {
    return <h1>Welcome to the Home Page</h1>;
}

function AboutPage() {
    return <h1>Learn more About Us</h1>;
}

function ContactPage() {
    return <h1>Get in Touch with Us</h1>;
}

export default App;