import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section id='about' className='about-area ptb-100'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='about-image'>
                <img src='/images/about-img1.jpg' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='about-content'>
                <h2>Why Cloud?</h2>
                <p>
                  “Cloud technologies essentially make every other technology
                  lighter, faster and more accessible from a customer point of
                  view, and this fact will be a key driver in the migration of
                  more services to cloud platforms.” – Gartner Research 2022
                </p>

                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='fas fa-desktop'></i>
                        </div>

                        <h3>Internet Access Circuits</h3>
                      </div>

                      <p>
                        Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan facilisis.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='fas fa-tasks'></i>
                        </div>

                        <h3>Private Internet Access Circuits</h3>
                      </div>

                      <p>
                        Quis ipsum suspendisse ultrices gravida. Risus commodo
                        viverra maecenas accumsan facilisis.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='fas fa-code'></i>
                        </div>
                        <h3>Security</h3>
                      </div>
                      <p>
                        Secure internet access circuits and redundant Internet
                        access circuits
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          <i className='fas fa-headset'></i>
                        </div>

                        <h3>Unified Phone Systems</h3>
                      </div>
                      <p>
                        Support for SMS, Video, and Content Sharing. User
                        mobility and integration with CRMs, 3rd party databases,
                        and “AI” functionality.
                      </p>
                    </div>
                  </div>
                </div>

                <a href='#' className='btn btn-primary'>
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='circle'>
          <img src='/images/circle.png' alt='cricle' />
        </div>
      </section>
    )
  }
}

export default About
