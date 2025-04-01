import React, {useState} from 'react'
import './index.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Construct the Gmail compose URL with the form data
    const subject = `Message from ${encodeURIComponent(formData.name)}`
    const body = `${encodeURIComponent(formData.message)}`
    const recipient = 'mynxtlearnings2025@gmail.com'

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`

    window.open(mailtoLink, '_blank')
  }

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          If you have any questions or just want to get in touch, feel free to
          send me a message!
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          <div className="input-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="contact-textarea"
            />
          </div>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
