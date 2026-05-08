import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/statistics/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/statistics/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/statistics/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/statistics/call_action/call_acition'
import Stats_section from '@/container/all-subject/statistics/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/statistics/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/statistics/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Online Statistics Class Help, Take My Statistics Class",
  description: "Stop feeling stuck and start making progress. We offer online statistics class help with confidence. Your success in statistics class begins with us. Get 50% Discount on Sign up Today.",
  alternates: {
    canonical: "/subjects/statistics-class",
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
