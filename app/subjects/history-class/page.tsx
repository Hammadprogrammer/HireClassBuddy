import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/history/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/history/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/history/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/history/call_action/call_acition'
import Stats_section from '@/container/all-subject/history/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/history/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/history/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Do My Online History Class, Pay to Take My History Class",
  description: "Hire the best online history class takers for hire at affordable rates. Contact us and boost your grades without even lifting a finger. Get 50% Discount on Your Sign up Today.",
  alternates: {
    canonical: "/subjects/history-class",
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
