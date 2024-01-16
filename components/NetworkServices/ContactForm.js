import { useForm, ValidationError } from '@formspree/react'

const ContactForm = () => {
  // Your component logic here
  const [state, handleSubmit] = useForm('xoqgvnor')

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    // Your JSX code here
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
            <ValidationError prefix='Name' field='name' errors={state.errors} />
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
            <ValidationError
              prefix='Business'
              field='business'
              errors={state.errors}
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
              type='tel'
              name='Phone'
              className='form-control'
              pattern='^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$' // Adjust this pattern to match your requirements
            />
            <ValidationError
              prefix='Phone'
              field='phone'
              errors={state.errors}
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
            <ValidationError
              prefix='Address'
              field='address'
              errors={state.errors}
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
            <ValidationError
              prefix='Core Applications?'
              field='core_applications?'
              errors={state.errors}
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
            <ValidationError
              prefix='Where do your core applications currently live?'
              field='core_apps_location?'
              errors={state.errors}
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
            <ValidationError
              prefix='How do your users get to them?'
              field='core_apps_user_access?'
              errors={state.errors}
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
  )
}

export default ContactForm
