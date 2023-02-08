import React, { Component } from 'react'
import Link from 'next/link'
// import { BsFillPlayFill } from 'react-icons/bs'
import ModalVideo from 'react-modal-video'

class Banner extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <React.Fragment>
        <div id='home' className='main-banner'>
          <div className='d-table'>
            <div className='d-table-cell'>
              <div className='container'>
                <div className='main-banner-content'>
                  <h1>NETWORK SERVICES</h1>
                  <p>Cloud Technology Consulting Firm for your Business.</p>

                  <div className='btn-box'>
                    <Link legacyBehavior href='/#contact'>
                      <a className='btn btn-primary'>Get Started</a>
                    </Link>

                    <div
                      className='popup-youtube video-btn'
                      onClick={(e) => {
                        e.preventDefault()
                        this.openModal()
                      }}
                    >
                      <i className='fa-solid fa-play'></i>
                      Watch our video
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
          videoId='bgiPTUy2RqI'
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    )
  }
}

export default Banner
