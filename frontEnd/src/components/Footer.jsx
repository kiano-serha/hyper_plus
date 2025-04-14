export default function Footer() {
    return (
        <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-lg-auto ms-lg-auto">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                <a
                                    href="/"
                                    target=""
                                    className="link-secondary"
                                    rel="noopener"
                                >
                                    Home Page
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/chat" className="link-secondary">
                                    Start Chat
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="/dev"
                                    className="link-secondary"
                                    rel="noopener"
                                >
                                    Development
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-auto mt-3 mt-lg-0">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item">
                                Copyright &copy; 2025 All rights reserved.
                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="./changelog.html"
                                    className="link-secondary"
                                    rel="noopener"
                                >
                                    Kian O'Connor
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}