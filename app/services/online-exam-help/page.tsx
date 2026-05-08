import React from 'react'
import type { Metadata } from 'next'
import OnlineHero from '@/container/services/online-exam/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-exam/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-exam/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-exam/call_action/call_acition'
import Stats_section from '@/container/services/online-exam/stats_section/stats_section'
import Content_section_two from '@/container/services/online-exam/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-exam/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-exam/testimonial/testimonial'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Online Exam Help – Hire Someone to Take My Exam for Me",
  description: "Looking for online exam help? Fret not our hire someone to take my exam got you covered. Just request us if you want to pay someone to take my online exam.",
  alternates: {
    canonical: "/services/online-exam-help",
  }
}

const page = () => {
  return (
    <>
      <OnlineHero />
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
