import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-quiz-test/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-quiz-test/feature_section/feature_section'

import ContentSectionOne from '@/container/services/online-quiz-test/Content_section_one/Content_section_one'

import CallActionSection from '@/container/services/online-quiz-test/call_action/call_acition'
import Stats_section from '@/container/services/online-quiz-test/stats_section/stats_section'
import Content_section_two from '@/container/services/online-quiz-test/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-quiz-test/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-quiz-test/testimonial/testimonial'

export const metadata: Metadata = {
  title: "Pay Someone to Take My Online Test, Do My Test for Me",
  description: "Looking for an affordable do my test for me service? Pay Someone to Take My Online Test now and skyrocket your grades. Get 50% Discount by signing up today for all your tests and quizzes.",
  alternates: {
    canonical: "/services/online-test-and-quizzes",
  }
}

const page = () => {
  return (
    <>
      <OnlineClassHero />
      <UniSection/>
      <Features />
      <ContentSectionOne />
      <CallActionSection/>
      <Stats_section/>
      <Content_section_two/>
      <ProcessSection/>
      <ServicesSection/>
      <ContentSectionThree/>
      <TestimonialSection/>
    </>
  )
}

export default page
