import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class Banner extends Component {
    state = {
        isOpen: false
    };

    openModal = () => {
        this.setState({isOpen: true})
    };
    render() {
        return (
            <React.Fragment>
                <div id="home" className="app-banner">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="app-banner-content">
                                            <h1>Ultimate Platform to monitor your best workflow.</h1>
                                            <p>It should be noted that although application software is thought of as a program, it can be anything that runs on a computer.</p>
                                            
                                            <div className="btn-box">
                                                <Link href="/app/#">
                                                    <a className="btn btn-primary">Get Started</a>
                                                </Link>

                                                <div
                                                    onClick={e => {e.preventDefault(); this.openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    <i className="fab fa-google-play"></i> Watch our video
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="app-banner-image">
                                            <img src="/images/phones_flat.png" alt="phone" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='szuchBiLrEM' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default Banner;
