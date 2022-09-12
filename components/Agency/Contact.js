import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <section id='contact' className='contact-area ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='section-title'>
            <h2>Contact Us</h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className='row align-items-center'>
            <div className='col-lg-8 col-md-12'>
              <form id='contactForm'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <label>First and Last Name</label>
                      <input
                        type='text'
                        className='form-control'
                        required={true}
                      />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <label>Business Name</label>
                      <input
                        type='text'
                        className='form-control'
                        required={false}
                      />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <label>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        required={true}
                      />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <label>Phone Number</label>
                      <input
                        type='text'
                        className='form-control'
                        required={true}
                      />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>Prime Address</label>
                      <input
                        type='text'
                        className='form-control'
                        required={false}
                      />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>What Are Your Core Applications?</label>
                      <textarea
                        className='form-control'
                        cols='30'
                        rows='4'
                        required={false}
                      />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>
                        Where do your core application current live?
                      </label>
                      <textarea
                        className='form-control'
                        cols='30'
                        rows='4'
                        required={false}
                      />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>How do your users get to them?</label>
                      <textarea
                        className='form-control'
                        cols='30'
                        rows='4'
                        required={false}
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <label>
                        Is there an additional info you would like to provide?
                      </label>
                      <textarea
                        className='form-control'
                        cols='30'
                        rows='4'
                        required={false}
                      />
                    </div>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <button type='submit' className='btn btn-primary'>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div className='col-lg-4 col-md-12'>
              <div className='contact-info-box'>
                <ul>
                  <li>
                    <i className='fas fa-map-marker-alt'></i>
                    <span>Based In:</span>
                    Danville, California
                  </li>

                  <li>
                    <i className='fas fa-envelope'></i>
                    <span>Email:</span>

                    <a href='mailto:sales@networksrvs.com'>
                      sales@networksrvs.com
                    </a>
                  </li>

                  <li>
                    <i className='fas fa-phone'></i>
                    <span>Phone:</span>

                    <a href='tel:9257668688'>(925) 766-8688</a>
                  </li>

                  <li>
                    <i className='fas fa-globe'></i>
                    <span>Website:</span>

                    <a href='#'>www.networksrvs.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
