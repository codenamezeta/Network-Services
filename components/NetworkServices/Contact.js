import ContactForm from './ContactForm'

//* This is a Contact Section that renders the contact form within.

export default function Contact() {
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
            <ContactForm />
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
