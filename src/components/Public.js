import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Easy Notes</span></h1>
            </header>
            <main className="public__main">
                <p>
Easy Notes is a user-friendly and intuitive note-taking application designed to help you capture and organize your thoughts, ideas, and reminders effortlessly. It provides a simple and streamlined interface, making it accessible to users of all levels of technical proficiency.</p>
                
                <br />
                
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public