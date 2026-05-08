import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/business/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/business/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/business/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/business/call_action/call_acition'
import Stats_section from '@/container/all-subject/business/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/business/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/business/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Online Business Class Help Services, Business Class Experts",
  description: "Don’t let tight deadlines stress you! Take online business class help service and stay ahead confidently! Get 50% Discount on Your Business Class by Business Class Subject Experts now.",
  alternates: {
    canonical: "/subjects/business-class",
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
    </>
  )
}

export default page
