import React, { Component } from 'react'

class CloudReadiness extends Component {
  openTabSection = (evt, tabName) => {
    let i, tabcontent, tablinks
    tabcontent = document.getElementsByClassName('tabs_item')
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('fadeInUp')
      tabcontent[i].style.display = 'none'
    }

    tablinks = document.getElementsByTagName('li')
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace('current', '')
    }

    document.getElementById(tabName).style.display = 'block'
    document.getElementById(tabName).className += ' fadeInUp animated'
    evt.currentTarget.className += 'current'
  }

  render() {
    return (
      <section className='new-features-update edge ptb-100'>
        <div className='container'>
          <div className='saas-section-title'>
            <h2>Is Your Business Cloud Ready?</h2>
            <div className='bar'></div>
            <p>
              “The shift to the cloud has only accelerated over the past two
              years due to COVID-19, as organizations responded to a new
              business and social dynamic.”
            </p>
          </div>

          <div className='tab new-features-update-tab'>
            <div className='row'>
              <div className='col-lg-3 col-md-4'>
                <ul className='tabs'>
                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab1')
                    }}
                    className='current'
                  >
                    <a href='#'>Level 0 – No cloud readiness</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab2')
                    }}
                  >
                    <a href='#'>Level 1 – Initial readiness</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab3')
                    }}
                  >
                    <a href='#'>Level 2 – Repeatable, opportunistic</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab4')
                    }}
                  >
                    <a href='#'>Level 3 – Systematic, documented</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab5')
                    }}
                  >
                    <a href='#'>Level 4 – Measured &amp; measurable</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab6')
                    }}
                  >
                    <a href='#'>Level 5 – Optimized</a>
                  </li>

                  {/* <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab7')
                    }}
                  >
                    <a href='#'>
                      <i className='fas fa-tools'></i> create & adjust
                    </a>
                  </li> */}
                </ul>
              </div>

              <div className='col-lg-9 col-md-8'>
                <div className='tab_content'>
                  <div id='tab1' className='tabs_item'>
                    <ul>
                      <li>Applications are running on premise</li>
                      <li>Email: Exchange</li>
                      <li>Network: MPLS, Internet</li>
                      <li>ERP: Oracle (on premise)</li>
                      <li>Voice: On premise PBX</li>
                      <li>Server workloads physical</li>
                      <li>Not yet considered virtualization</li>
                      <li>Perimeter based security</li>
                    </ul>
                    <img
                      src='/images/cloud-readiness-images/level-0.png'
                      alt='new'
                    />
                  </div>

                  <div id='tab2' className='tabs_item'>
                    <img
                      src='/images/cloud-readiness-images/level-1.png'
                      alt='new'
                    />
                  </div>

                  <div id='tab3' className='tabs_item'>
                    <img
                      src='/images/cloud-readiness-images/level-2.png'
                      alt='new'
                    />
                  </div>

                  <div id='tab4' className='tabs_item'>
                    <img
                      src='/images/cloud-readiness-images/level-3.png'
                      alt='new'
                    />
                  </div>

                  <div id='tab5' className='tabs_item'>
                    <img
                      src='/images/cloud-readiness-images/level-4.png'
                      alt='new'
                    />
                  </div>

                  <div id='tab6' className='tabs_item'>
                    <img
                      src='/images/cloud-readiness-images/level-5.png'
                      alt='new'
                    />
                  </div>

                  {/* <div id='tab7' className='tabs_item'>
                    <img src='/images/cloud-readiness-images/level-0.png' alt='new' />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CloudReadiness
