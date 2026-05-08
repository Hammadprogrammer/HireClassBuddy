import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-proctored-exam/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-proctored-exam/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-proctored-exam/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-proctored-exam/call_action/call_acition'
import Stats_section from '@/container/services/online-proctored-exam/stats_section/stats_section'
import Content_section_two from '@/container/services/online-proctored-exam/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-proctored-exam/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-proctored-exam/testimonial/testimonial'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Do My Proctored Exam Help, Take My Online Proctored Exam",
  description: "Looking for someone for do my proctored exam help service? We have got you covered. Hire our professional proctored exam takers at affordable prices and boost your score.",
  alternates: {
    canonical: "/services/online-proctored-exam",
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
