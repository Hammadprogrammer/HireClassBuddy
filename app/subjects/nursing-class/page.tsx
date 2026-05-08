import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/nursing/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/nursing/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/nursing/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/history/call_action/call_acition'
import Stats_section from '@/container/all-subject/nursing/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/nursing/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/nursing/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Take My Nursing Class, Pay Someone to Do My Nursing Class",
  description: "Falling behind in your online nursing class? Get expert help with online nursing class and complete assignments on time with ease. Get 50% discount on your Nursing Class Help Services Today.",
  alternates: {
    canonical: "/subjects/nursing-class",
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
