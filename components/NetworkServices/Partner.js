import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import { GrNext, GrPrevious } from 'react-icons/gr'

const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [<GrNext />, <GrPrevious />],
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1024: {
      items: 4,
    },
    1200: {
      items: 6,
    },
  },
}

class Partner extends Component {
  state = { display: false }

  componentDidMount() {
    this.setState({ display: true })
  }

  render() {
    return (
      <section className='partner-area'>
        <div className='container'>
          <h3>Trusted by Millions of users.</h3>

          <div className='row'>
            {this.state.display ? (
              <OwlCarousel
                className='partner-slides owl-carousel owl-theme'
                {...options}
              >
                <div className='col-lg-12 col-md-12'>
                  <div className='partner-item'>
                    <Link href='#'>
                      <a>
                        <img src='/images/agency-partner1.png' alt='logo' />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='partner-item'>
                    <Link href='#'>
                      <a>
                        <img src='/images/agency-partner2.png' alt='logo' />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='partner-item'>
                    <Link href='#'>
                      <a>
                        <img src='/images/agency-partner3.png' alt='logo' />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='partner-item'>
                    <Link href='#'>
                      <a>
                        <img src='/images/agency-partner4.png' alt='logo' />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='partner-item'>
                    <Link href='#'>
                      <a>
                        <img src='/images/agency-partner5.png' alt='logo' />
                      </a>
                    </Link>
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='partner-item'>
                    <Link href='#'>
                      <a>
                        <img src='/images/agency-partner6.png' alt='logo' />
                      </a>
                    </Link>
                  </div>
                </div>
              </OwlCarousel>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Partner
