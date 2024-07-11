import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Travelo</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href="">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/">
                        <i class="fa-brands fa-instagram-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://twitter.com/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                    <a href="https://github.com/">
                        <i className="fa-brands fa-github-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="https://github.com/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="https://github.com">Project</a>
                    <a href="https://twitter.com/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="">Support</a>
                    <a href="">Troubleshhoting</a>
                    <a href="">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <div className="last-text">
                <h3>Travelo Tourism Corporation 2024 &copy; All Rights Reserved.</h3>
            </div>
        </div>
    );
};

export default Footer;