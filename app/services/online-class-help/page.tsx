import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/services/online-class/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/services/online-class/feature_section/feature_section'
import ContentSectionOne from '@/container/services/online-class/Content_section_one/Content_section_one'
import CallActionSection from '@/container/services/online-class/call_action/call_acition'
import Stats_section from '@/container/services/online-class/stats_section/stats_section'
import Content_section_two from '@/container/services/online-class/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/services/online-class/content_section_three/content_section_three'
import TestimonialSection from '@/container/services/online-class/testimonial/testimonial'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Do My Class, Pay for Online Class Help, Do My Online Class",
  description: "Searching for Pay for Online Class Help? We are here to ace your grades with success. Our Do My Class experts are here to help. The service is completely private and secure.",
  alternates: {
    canonical: "/services/online-class-help",
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
