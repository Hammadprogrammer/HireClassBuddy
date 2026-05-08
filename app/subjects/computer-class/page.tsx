import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/computer/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/computer/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/computer/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/computer/call_action/call_acition'
import Stats_section from '@/container/all-subject/computer/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/computer/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/computer/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Online Computer Class Help, Take My Computer Class for Me",
  description: "Struggling with your difficult online computer class? Hire our professional online computer class takers for hire at very affordable rates and enjoy your higher score.",
  alternates: {
    canonical: "/subjects/computer-class",
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
