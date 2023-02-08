import React from 'react'
import NavbarSix from '../components/Layouts/NavbarSix';
import Footer from '../components/Layouts/Footer';

class Custom404 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavbarSix />

                <section className="page-title-area">
                    <div className="container">
                        <h2>Error</h2>
                    </div>
                </section>

                <section className="error-area ptb-100">
                    <div className="container">
                        <div className="error-content">
                            <img src="/images/404.png" alt="error" />

                            <form className="search-form">
                                <input type="text" className="search-field" placeholder="search" />

                                <button type="submit" className="search-submit">Search</button>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />
            </React.Fragment>
        );
    }
}
  
export default Custom404;