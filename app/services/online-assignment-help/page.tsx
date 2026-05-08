import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-assignment-help/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-assignment-help/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-assignment-help/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-assignment-help/call_action/call_acition'
import Stats_section from '@/container/services/online-assignment-help/stats_section/stats_section'
import Content_section_two from '@/container/services/online-assignment-help/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-assignment-help/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-assignment-help/testimonial/testimonial'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Assignment Writing Service, Pay Someone to Do My Assignment",
  description: "Struggling with assignments? Get assignment writing service from professional writers. 100% human-written, plagiarism-free work with secure payments and on-time delivery.",
  alternates: {
    canonical: "/services/online-assignment-help",
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
