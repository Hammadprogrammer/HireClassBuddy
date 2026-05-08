import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/sociology/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/sociology/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/sociology/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/sociology/call_action/call_acition'
import Stats_section from '@/container/all-subject/sociology/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/sociology/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/sociology/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Do My Sociology Class, Take My Sociology Class for Me",
  description: "Need support in your Sociology class? Hire our experienced sociology class taker for hire to stay on track and reduce stress. Get 50% Discount Today for Your Sociology Class on Sign up.",
  alternates: {
    canonical: "/subjects/sociology-class",
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
