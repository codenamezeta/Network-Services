import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('xoqgvnor')

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    <section id='contact' className='contact-area ptb-100'>
      <div className='container'>
        <div className='section-title'>
          <h2>Contact Us</h2>
          <p>
            Reach out to us and let us know how we can help you. We have been
            involved in circuit quoting, business communications systems
            acquisition, and support for over 30 years.
          </p>
        </div>

        <div className='row'>
          <div className='col-lg-8 col-md-12'>
            <form id='contactForm' onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='name'>
                      <small>* </small>First and Last Name
                    </label>
                    <input
                      id='name'
                      type='text'
                      name='Name'
                      required={true}
                      className='form-control'
                    />
                    <ValidationError
                      prefix='Name'
                      field='name'
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='business'>Business Name</label>
                    <input
                      id='business'
                      type='text'
                      name='Business'
                      className='form-control'
                    />
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='email'>
                      <small>* </small>Email
                    </label>
                    <input
                      id='email'
                      type='email'
                      name='Email'
                      required={true}
                      className='form-control'
                    />
                    <ValidationError
                      prefix='Email'
                      field='email'
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className='col-lg-6 col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input
                      id='phone'
                      type='text'
                      name='Phone'
                      className='form-control'
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <label htmlFor='address'>Prime Address</label>
                    <input
                      id='address'
                      type='text'
                      name='Address'
                      className='form-control'
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <label htmlFor='core_applications?'>
                      What are your Core Applications?
                    </label>
                    <textarea
                      id='core_applications?'
                      type='text'
                      name='Core Applications?'
                      cols='30'
                      rows='4'
                      required={false}
                      className='form-control'
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <label htmlFor='core_apps_location?'>
                      Where do your core applications currently live?
                    </label>
                    <textarea
                      id='core_apps_location?'
                      type='text'
                      name='Where do your core applications currently live?'
                      cols='30'
                      rows='4'
                      required={false}
                      className='form-control'
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <label htmlFor='core_apps_user_access?'>
                      How do your users get to them?
                    </label>
                    <textarea
                      id='core_apps_user_access?'
                      type='text'
                      name='How do your users get to them?'
                      cols='30'
                      rows='4'
                      required={false}
                      className='form-control'
                    />
                  </div>
                </div>
                <div className='col-lg-12 col-md-12'>
                  <div className='form-group'>
                    <label htmlFor='additional_info'>
                      Is there any additional info you would like to provide?
                    </label>
                    <textarea
                      id='additional_info'
                      type='text'
                      name='Additional Info'
                      cols='30'
                      rows='4'
                      required={false}
                      className='form-control'
                    />
                    <ValidationError
                      prefix='Additional Info'
                      field='additional_info'
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div className='col-lg-12 col-md-12'>
                  <button
                    id='submit'
                    type='submit'
                    name='Submit'
                    disabled={state.submitting}
                    className='btn btn-primary'
                  >
                    Send Message
                  </button>
                  <ValidationError errors={state.errors} />
                </div>
              </div>
            </form>
          </div>

          <div className='col-lg-4 col-md-12'>
            <div className='contact-info-box'>
              <h3>Network Services</h3>
              <ul>
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

                  <a href='tel:+19257668688'>(925) 766-8688</a>
                </li>

                <li>
                  <i className='fas fa-globe'></i>
                  <span>Website:</span>

                  <a href='#'>www.networksrvs.com</a>
                </li>
                <li>
                  <i className='fas fa-map-marker-alt'></i>
                  <span>Based In:</span>
                  Danville, California
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
