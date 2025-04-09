import React from 'react'

function Map() {
  return (
    <section className='w-full '>
 <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.4326294962075!2d-2.583939023751628!3d53.371308272856034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0205044e54d9%3A0x9f6ad01e5b69eef1!2s69%20London%20Rd%2C%20Stockton%20Heath%2C%20Warrington%20WA4%206SG%2C%20UK!5e0!3m2!1sen!2sin!4v1743246441578!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-[500px] w-full"
        ></iframe>
    </section>
  )
}

export default Map