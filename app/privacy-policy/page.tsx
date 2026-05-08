import type { Metadata } from 'next'
import PrivacyPolicy from '@/container/privacy-policy/privacy-policy'

export const metadata: Metadata = {
  title: "Privacy Policy | Hire Class Buddy",
  description: "Read our Privacy Policy to understand how Hire Class Buddy handles your personal information and ensures your data security.",
  alternates: {
    canonical: "/privacy-policy",
  }
}

const page = () => {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}

export default page
