import type { Metadata } from 'next'
import RefundPolicy from '@/container/refund-policy/refund-policy'

export const metadata: Metadata = {
  title: "Refund Policy – Hire Class Buddy",
  description: "Struggling with online exams? Hire professional online exam help, personalized tutoring, and 24/7 support to boost your confidence and improve your scores.",
  alternates: {
    canonical: "/refund-policy",
  }
};

const page = () => {
  return (
    <div>
      <RefundPolicy/>
    </div>
  )
}

export default page