import React, { Component } from 'react'

class Features extends Component {
  render() {
    return (
      <section id='features' className='features-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Is Your Business Cloud Ready?</h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-features'>
                <div className='icon bg1'>
                  <i className='fa-solid fa-0'></i>
                </div>
                <h3>No Cloud Readiness</h3>
                <p>
                  The company does not take advantage of the cloud. All systems
                  are traditional. There are no plans for migrating to the
                  cloud.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-features'>
                <div className='icon bg2'>
                  <i className='fa-solid fa-1'></i>
                </div>
                <h3>Initial Readiness</h3>
                <p>
                  The suitability of existing software and services for the
                  cloud has been mapped. Understanding of cloud services, some
                  cloud services in use. No clear plans.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-features'>
                <div className='icon bg3'>
                  <i className='fa-solid fa-2'></i>
                </div>
                <h3>Opportunistic</h3>
                <p>
                  The process for the introduction of cloud services has been
                  defined and is repeatable. The capacity for cloud migration
                  exists. However, the approach is not systematic.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-features'>
                <div className='icon bg4'>
                  <i className='fa-solid fa-3'></i>
                </div>
                <h3>Systematic</h3>
                <p>
                  Cloud service utilization is automated with tools and
                  integrated. Activities are systematic and can be monitored.
                  Documentation exists.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-features'>
                <div className='icon bg5'>
                  <i className='fa-solid fa-4'></i>
                </div>
                <h3>Measurable</h3>
                <p>
                  Cloud applications are in everyday use extensively in the
                  organization Private, public, hybrid platforms. The cloud
                  management mode is followed, with utilization measured and
                  continuously developed.
                </p>
              </div>
            </div>

            <div className='col-lg-4 col-md-6'>
              <div className='single-features'>
                <div className='icon bg6'>
                  <i className='fa-solid fa-5'></i>
                </div>
                <h3>Optimized</h3>
                <p>
                  Have an interoperable and open cloud that is being developed
                  and optimized proactively through meters and using data. It is
                  possible to manage workloads flexibly on different service
                  platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Features
