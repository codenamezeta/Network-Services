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
    document.getElementById(tabName).className += ' fadeIn animated'
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
                    <a href='#'>Level 0</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab2')
                    }}
                  >
                    <a href='#'>Level 1</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab3')
                    }}
                  >
                    <a href='#'>Level 2</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab4')
                    }}
                  >
                    <a href='#'>Level 3</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab5')
                    }}
                  >
                    <a href='#'>Level 4</a>
                  </li>

                  <li
                    onClick={(e) => {
                      e.preventDefault()
                      this.openTabSection(e, 'tab6')
                    }}
                  >
                    <a href='#'>Level 5</a>
                  </li>
                </ul>
              </div>

              <div className='col-lg-9 col-md-8'>
                <div className='tab_content'>
                  <div id='tab1' className='tabs_item'>
                    <div className='row'>
                      <h3
                        style={{
                          color: 'white',
                        }}
                      >
                        No Cloud Readiness
                      </h3>
                      <div className='col-sm-4'>
                        <ul
                          style={{
                            color: 'white',
                            fontSize: '1.2em',
                            // textShadow: '1px 1px 2px #000',
                          }}
                        >
                          <li>Applications are running on premise</li>
                          <li>Email: Exchange</li>
                          <li>Network: MPLS, Internet</li>
                          <li>ERP: Oracle (on premise)</li>
                          <li>Voice: On premise PBX</li>
                          <li>Server workloads physical</li>
                          <li>Not yet considered virtualization</li>
                          <li>Perimeter based security</li>
                        </ul>
                      </div>
                      <div className='col-sm-8'>
                        <img
                          src='/images/cloud-readiness-images/level-0.png'
                          alt='new'
                        />
                      </div>
                    </div>
                  </div>

                  <div id='tab2' className='tabs_item'>
                    <div className='row'>
                      <h3
                        style={{
                          color: 'white',
                        }}
                      >
                        Initial Readiness
                      </h3>
                      <div className='col-sm-4'>
                        <ul
                          style={{
                            color: 'white',
                            fontSize: '1.2em',
                            // textShadow: '1px 1px 2px #000',
                          }}
                        >
                          <li className='fadeIn animated'>
                            Applications are running on-premise
                          </li>
                          <li>Initial SaaS deployments</li>
                          <li>Email: Office 365 (SaaS)</li>
                          <li>Migration off MPLS to DIA Some SD-WAN</li>
                          <li>ERP: Oracle (on prem)</li>
                          <li>CRM: Salesforce (SaaS)</li>
                          <li>Server workloads physical</li>
                        </ul>
                      </div>
                      <div className='col-sm-8'>
                        <img
                          src='/images/cloud-readiness-images/level-0.png'
                          alt='new'
                        />
                      </div>
                    </div>
                  </div>

                  <div id='tab3' className='tabs_item'>
                    <div className='row'>
                      <h3
                        style={{
                          color: 'white',
                        }}
                      >
                        Repeatable &amp; Opportunistic
                      </h3>
                      <div className='col-sm-4'>
                        <ul
                          style={{
                            color: 'white',
                            fontSize: '1.2em',
                            // textShadow: '1px 1px 2px #000',
                          }}
                        >
                          <li>Many applications still running on-premise</li>
                          <li>
                            Prepared IT and procurement process for taking cloud
                            services into use
                          </li>
                          <li>Network: SD-WAN ▪ ERP: Oracle (on prem)</li>
                          <li>Email: Office 365 (SaaS)</li>
                          <li>CRM: Salesforce (SaaS)</li>
                          <li>PBX: Hosted Voice (UCaaS)</li>
                          <li>
                            Compute: Private Cloud in an On-Prem Data Center
                          </li>
                        </ul>
                      </div>
                      <div className='col-sm-8'>
                        <img
                          src='/images/cloud-readiness-images/level-0.png'
                          alt='new'
                        />
                      </div>
                    </div>
                  </div>

                  <div id='tab4' className='tabs_item'>
                    <div className='row'>
                      <h3
                        style={{
                          color: 'white',
                        }}
                      >
                        Systematic &amp; Well-Documented
                      </h3>
                      <div className='col-sm-4'>
                        <ul
                          style={{
                            color: 'white',
                            fontSize: '1.2em',
                            // textShadow: '1px 1px 2px #000',
                          }}
                        >
                          <li>
                            Efficiency increases as operations are systematic
                            and repeatable
                          </li>
                          <li>Operational process documented</li>
                          <li>Network: SD-WAN</li>
                          <li>ERP: Oracle (on prem)</li>
                          <li>Email: Office 365 (SaaS)</li>
                          <li>CRM: Salesforce (SaaS)</li>
                          <li>PBX: Hosted Voice (UCaaS)</li>
                          <li>Compute: Private Cloud in a Data Center</li>
                        </ul>
                      </div>
                      <div className='col-sm-8'>
                        <img
                          src='/images/cloud-readiness-images/level-0.png'
                          alt='new'
                        />
                      </div>
                    </div>
                  </div>

                  <div id='tab5' className='tabs_item'>
                    <div className='row'>
                      <h3
                        style={{
                          color: 'white',
                        }}
                      >
                        Measured &amp; Measurable
                      </h3>
                      <div className='col-sm-4'>
                        <ul
                          style={{
                            color: 'white',
                            fontSize: '1.2em',
                            // textShadow: '1px 1px 2px #000',
                          }}
                        >
                          <li>Only legacy applications remain on premise</li>
                          <li>Cloud-native apps widely used</li>
                          <li>Use of hybrid cloud: private, public</li>
                          <li>Some parts of org may remain at level 2 or 3</li>
                          <li>Network: SD-WAN</li>
                          <li>ERP: Oracle OnDemand (SaaS)</li>
                          <li>Compute: AWS, Microsoft Azure, GCP (PaaS)</li>
                          <li>Cybersecurity: CASB, SASE</li>
                        </ul>
                      </div>
                      <div className='col-sm-8'>
                        <img
                          src='/images/cloud-readiness-images/level-0.png'
                          alt='new'
                        />
                      </div>
                    </div>
                  </div>

                  <div id='tab6' className='tabs_item'>
                    <div className='row'>
                      <h3
                        style={{
                          color: 'white',
                        }}
                      >
                        Optimized
                      </h3>
                      <div className='col-sm-4'>
                        <ul
                          style={{
                            color: 'white',
                            fontSize: '1.2em',
                            // textShadow: '1px 1px 2px #000',
                          }}
                        >
                          <li>Flexibly managing workloads across platforms</li>
                          <li>Leverages cloud on best fit, multicloud</li>
                          <li>Mature cost optimization process</li>
                          <li>Often aspirational stage</li>
                          <li>ERP: Oracle OnDemand (SaaS)</li>
                          <li>Email: Office 365 (SaaS)</li>
                          <li>CRM: Salesforce (SaaS)</li>
                          <li>Compute: AWS, Microsoft Azure, GCP (PaaS)</li>
                        </ul>
                      </div>
                      <div className='col-sm-8'>
                        <img
                          src='/images/cloud-readiness-images/level-0.png'
                          alt='new'
                        />
                      </div>
                    </div>
                  </div>
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
