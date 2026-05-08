import React from 'react'
import type { Metadata } from 'next'
import ReviewsPage from '@/container/reviews/hero_section/reviews'
import Reviewscard from '@/container/reviews/review_card/review_card'


export const metadata: Metadata = {
  title: "Hire Class Buddy Reviews | Online Class Help Testimonials",
  description: "Read real student reviews of Hire Class Buddy. Discover how our online class help, exam help, assignments, and quizzes have helped students succeed.",
  alternates: {
    canonical: "/reviews",
  }
}

const page = () => {
  
  return (
   <>
      <ReviewsPage/>    
      <Reviewscard/>
   </>
  )
}

export default page
