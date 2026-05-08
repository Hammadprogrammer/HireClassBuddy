import type { Metadata } from 'next'
import ContactForm from '@/container/contact/contact_from/contact_from'

export const metadata: Metadata = {
  title: "Contact Us | Hire Class Buddy",
  description: "Get in touch with Hire Class Buddy for expert assistance with your online classes and exams. We are here to help you succeed.",
  alternates: {
    canonical: "/contact-us",
  }
}

const page = () => {
  return (
    <div>
      {/* <ContactSection /> */}
      <ContactForm />
      {/* <Hero /> */}
      
    </div>
  )
}

export default page