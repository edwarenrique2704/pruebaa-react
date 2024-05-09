import { Outlet, NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <NavLink to="/" className="nav-link active" aria-current="page">
                        <h1 className="text-white">Demo Streamingg</h1>
                    </NavLink>
                    <form className="d-flex" role="search">
                        <button className="btn btn-bg-primary text-white">Login</button>
                        <div className="boton">
                            <button type="button" className="btn btn-dark">
                                Start yourd free trial
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
            <nav className="navbar bg-dark">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1 text-white">popular titles </span>
                </div>
            </nav>

            <Outlet />
        </>
    )
}