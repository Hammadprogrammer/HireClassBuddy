import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/psychology/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/psychology/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/psychology/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/psychology/call_action/call_acition'
import Stats_section from '@/container/all-subject/psychology/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/psychology/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/psychology/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Online Psychology Class Help, Hire Psychology Class Takers",
  description: "Need a professional psychology class support? Boost your grades with our reliable psychology class help services offering guidance, solutions, and step-by-step support.",
  alternates: {
    canonical: "/subjects/psychology-class",
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
