import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/law/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/law/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/law/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/law/call_action/call_acition'
import Stats_section from '@/container/all-subject/law/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/law/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/law/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Law Class Help, Online Law Class Takers, Do My Law Class",
  description: "Want to hire help with online law class? We are offering top-notch online tutoring help for law students at really affordable rates, hire us now! Get 50% Discount on Your Law Class, Sugn up Today.",
  alternates: {
    canonical: "/subjects/law-class",
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
