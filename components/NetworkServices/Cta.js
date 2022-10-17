import React, { Component } from 'react'
import ModalVideo from 'react-modal-video'
import { BsFillPlayFill, BsCloudFog2Fill } from 'react-icons/bs'
import { MdOutlineCable, MdPhoneInTalk } from 'react-icons/md'

class Cta extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <React.Fragment>
        <section
          className='cta-area jarallax pb-0'
          data-jarallax='{"speed": 0.2}'
          style={{ paddingTop: '250px' }}
        >
          <div className='container'>
            <div className='cta-content'>
              <h1
                className='image-overlay'
                style={{ fontSize: '6em', fontWeight: '700' }}
              >
                Network Services
              </h1>
              <h3 className='image-overlay'>
                Technology Consulting Firm For Your Business
              </h3>

              <div
                className='popup-youtube video-btn'
                onClick={(e) => {
                  e.preventDefault()
                  this.openModal()
                }}
              >
                <BsFillPlayFill />
                {/* <i className='fas fa-play'></i> */}
              </div>
            </div>

            <div className='cta-inner-content'>
              <div className='row'>
                <div className='col-lg-4 col-md-6'>
                  <div className='single-cta-box'>
                    <BsCloudFog2Fill size='2.5em' />

                    <h3>Cloud Migration</h3>
                    <p>
                      Now, more than ever, enterprises must be able to adapt
                      quickly to change. Cloud solutions offer the flexibility
                      that you need to ramp up productivity for your staff and
                      your clients through this time of change.
                    </p>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6'>
                  <div className='single-cta-box'>
                    <MdOutlineCable size='2.5em' />

                    <h3>Internet Access Circuts</h3>
                    <p>
                      We offer private, secure, and redundant Internet Access
                      Circuts for a wide variety of business' needs. With over
                      30 years of experience in circuit quoting, business
                      communications systems acquisition, and support.
                    </p>
                  </div>
                </div>

                <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
                  <div className='single-cta-box'>
                    <MdPhoneInTalk size='2.5em' />
                    <h3>Unified Phone Systems</h3>
                    <p>
                      Our Unified Communications platforms are reliable,
                      scalable, and flexible with support for SMS, video, file
                      sharing, mobility, and CRM integration. Our platforms can
                      also leverage A.I. to improve workflows and diagnose
                      issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId='szuchBiLrEM'
          onClose={() => this.setState({ isOpen: false })}
        />
      </React.Fragment>
    )
  }
}

export default Cta
