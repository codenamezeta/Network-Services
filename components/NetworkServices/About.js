import React, { Component } from 'react'
import { GiReceiveMoney } from 'react-icons/gi'
import { FaUniversalAccess } from 'react-icons/fa'
import { BsStack, BsShieldLockFill } from 'react-icons/bs'

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
                  Now, more than ever, the cloud has become a vital asset in
                  empowering businesses to innovate, strategize, and outmaneuver
                  the uncertainty of the future. The global pandemic has
                  accelerated more and more companies' transition to the cloud,
                  reinventing their offerings and becoming more cost-efficient,
                  agile, and innovative in how they operate their businesses.
                </p>
                {/* <p>
                  “Cloud technologies essentially make every other technology
                  lighter, faster and more accessible from a customer point of
                  view, and this fact will be a key driver in the migration of
                  more services to cloud platforms.” – Gartner Research 2022
                </p> */}

                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          {/* <i className='fas fa-desktop'></i> */}
                          <GiReceiveMoney size='1.33em' />
                        </div>
                        <h3>Lower Cost</h3>
                      </div>
                      <p>
                        Using efficient cloud operating models, powered by
                        analytics, automation and AI, allows businesses to gain
                        about 30-50% in ongoing support costs.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          <FaUniversalAccess size='1.33em' />
                        </div>

                        <h3>Improve Accessibility</h3>
                      </div>

                      <p>
                        The cloud improves your organization’s agility when you
                        use standardized services that can be provisioned in
                        minutes instead of days or weeks.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          <BsStack size='1.33em' />
                        </div>
                        <h3>Scale & Grow</h3>
                      </div>
                      <p>
                        Cloud computing can scale to fit the needs of any
                        business and or customer base. No more physical servers,
                        software licenses, storage or network equipment.
                      </p>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-inner-content'>
                      <div className='title'>
                        <div className='icon'>
                          <BsShieldLockFill size='1.33em' />
                        </div>

                        <h3>Protect Your Business</h3>
                      </div>
                      <p>
                        Security and compliance are built into the core of -AI-
                        to protect your most important business-crucial
                        workloads and most sensitive & confidential data.
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
          <img src='/images/circle.png' alt='Circle Background' />
        </div>
      </section>
    )
  }
}

export default About
