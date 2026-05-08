import React from 'react'
import type { Metadata } from 'next'
import OnlineClassHero from '@/container/all-subject/math/hero_section/page'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/all-subject/math/feature_section/feature_section'
import ContentSectionOne from '@/container/all-subject/math/Content_section_one/Content_section_one'
import CallActionSection from '@/container/all-subject/math/call_action/call_acition'
import Stats_section from '@/container/all-subject/math/stats_section/stats_section'
import Content_section_two from '@/container/all-subject/math/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/all-subject/math/content_section_three/content_section_three'

// Meta Data Configuration
export const metadata: Metadata = {
  title: "Online Math Class, Pay Someone to Do My Math Class for Me",
  description: "Struggling to keep up in math? Get expert online math class help and improve your grades quickly with professional guidance. Get 50% Discount Offer on Your first math class order today.",
  alternates: {
    canonical: "/subjects/math-class",
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
