import React from 'react'
import type { Metadata } from 'next'
import HeroSection from '@/container/home/hero_section/hero_section'
import UniSection from '@/container/home/uni_section/uni_section'
import Features from '@/container/home/feature_section/feature_section'
import CallActionSection from '@/container/home/call_action/call_acition'
import ContentSectionOne from '@/container/home/content_section_one/Content_section_one'
import Stats_section from '@/container/home/stats_section/stats_section'
import Content_section_two from '@/container/home/content_section_two/content_section_two'
import ProcessSection from '@/container/home/process_section/process_section'
import ServicesSection from '@/container/home/service_section/service_section'
import ContentSectionThree from '@/container/home/content_section_three/content_section_three'
import TestimonialSection from '@/container/home/testimonial/testimonial'

export const metadata: Metadata = {
  title: "Take My Online Class, Pay Someone to Take My Online Class",
  description: "Stuck with Take My Online Class? Fret not, we have Got Your back. Just Request Us if You want to Pay Someone to Take My Online Class and Ace Your Online Class Grades.",
  alternates: {
    canonical: "/",
  }
}

const page = () => {
  return (
   <>
   <HeroSection/>
   <UniSection/>
   <Features/>
   <ContentSectionOne/>
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