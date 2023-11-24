import AnimatedLetters from '../AnimatedLettes'
import './index.scss'
import { Loader } from 'react-loaders'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setInterval(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  // sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY') After creating an account, can find your service ID in the email services tab, your template ID in the email templates tab, and your public key within the Account tab under API Keys.

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_nafrlzi',
        'template_5vbshst',
        form.current,
        '5ZbhjUdmijfjGDaeN'
      )

      // window.location.reload(false) is called after the email is successfully sent. It reloads the page to provide a fresh state and clear the form fields after the message is sent.
      .then(
        () => {
          alert('Message successfully sent')
          window.location.reload(false)
        },
        () => {
          alert('Message failed')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Contact Me'.split('')}
              idx={15}
            />
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nam, placeat neque nulla necessitatibus ex praesentium sapiente
            delectus aspernatur consequatur qui. Ducimus repudiandae, totam
            quibusdam quaerat minus dolore assumenda nulla!
          </p>

          {/* By using  ref  on the form element, you can access the form's properties and methods. For example, in the  sendEmail  function,  refForm.current  is used as an argument for the  sendForm  function from the  emailjs  library:  emailjs.sendForm('gmail', 'template_oa6svfe', refForm.current, 'public key') . This allows you to access the form's data and submit it for email sending.  */}

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>

                <li>
                  <input type="submit" value="Send" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          SLegendz
          <br />
          India
          <br />
          Haripur, Nawada
          <br />
          Dehradun
          <br />
          <span> leviackerman61900@gmail.com </span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[30.26688, 78.06089]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[30.26688, 78.06089]}>
              <Popup>
                SLegendz lives here, come over for a cup of coffee.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
