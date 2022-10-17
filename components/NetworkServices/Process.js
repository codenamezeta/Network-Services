import React, { Component } from 'react'

class Process extends Component {
  render() {
    return (
      <section className='ux-research-process ptb-100 bg-f9f9f9'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
              <div className='research-process-image'>
                <img src='/images/ux-women.jpg' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='research-process-content'>
                <h2>What We Do For You</h2>
                {/* <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p> */}

                <div className='single-process'>
                  <span>1</span>
                  <h3>We Evaluate Your Services</h3>
                  <p>
                    Our first step is to get to know you, your business, your
                    goals, and your frustrations. Then we do a deep dive into
                    the technology services you have and help to determine if
                    they are the right ones to help you meet and exceed your
                    goals.
                  </p>
                </div>

                <div className='single-process'>
                  <span>2</span>
                  <h3>We Find The Best Solutions For You</h3>
                  <p>
                    You don't have to meet with countless sales people and wade
                    through a myriad of confusing proposals. If you need new or
                    different solutions, <em>we</em> do the work of vetting the
                    best of breed from hundreds of different providers.
                  </p>
                </div>

                <div className='single-process'>
                  <span>3</span>
                  <h3>We Help you Negotiate</h3>
                  <p>
                    We remain at your side as <em>you</em> select the
                    provider(s) best for you. And then, we help you to negotiate
                    with the provider to ensure you have the best possible price
                    as well as the best contract terms.
                  </p>
                </div>

                <div className='single-process'>
                  <span>4</span>
                  <h3>We Oversee Everything For You</h3>
                  <p>
                    We oversee all of your providers to help manage whatever
                    installations and integrations are needed. And we ensure the
                    providers continually provide superior service and
                    communication. You can be as involved or <em>un</em>involved
                    as you wish.
                  </p>
                </div>

                <div className='single-process'>
                  <span>5</span>
                  <h3>
                    We are Your Ongoing Customer Service Overlay and Guide
                  </h3>
                  <p>
                    As your trusted advisor for as long as you want. At no
                    charge, we act as a customer service overlay representing
                    you to your providers. And if they fall short, we have
                    relationships and tools to escalate the issue and ensure
                    prompt resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Process
