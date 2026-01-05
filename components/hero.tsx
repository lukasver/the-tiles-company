"use client"

import { cn } from '@/lib/utils'
import Link from './Link'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { Highlighter } from './ui/highlighter'
import { useEffect, useState } from 'react'
import { SparklesText } from './ui/sparkles-text'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
      mass: 1,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 120,
      damping: 12,
      mass: 0.8,
    },
  },
}

export const Hero = () => {

  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!inView) {
      setInView(true)
    }
  }, [])

  return (
    <motion.div
      className="container mx-auto grid place-items-center p-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <motion.div
        className="flex flex-col max-w-2xl gap-4 -mt-30 items-center md:items-start"
        variants={containerVariants}
      >
        <div className="flex flex-col">
          <motion.h1
            className="text-secondary font-extrabold z-40 self-center"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 text-accent-foreground text-sm mb-6">
              <Sparkles className="h-4 w-4" />
              AI, Web3, and Competitive Play
            </div>
          </motion.h1>
          <motion.h2
            className={cn(
              "relative text-4xl md:text-5xl lg:text-7xl leading-tight font-semibold md:max-w-2xl text-primary-foreground font-display z-40",
              "text-center md:text-left"
            )}
            variants={itemVariants}
          >
            A <Highlighter action="underline" color="oklch(0.5398 0.2198 29.39)" isView={inView}>Next</Highlighter> Generation<br />
            <SparklesText
              className="inline-block"
            >Gaming Platform</SparklesText>
          </motion.h2>
        </div>
        <motion.p
          className='z-40 text-primary-foreground text-xl relative text-center md:text-left leading-relaxed'
          variants={itemVariants}
        >
          Mahjong Stars is being built as a modern, scalable gaming ecosystem designed for the next wave of digital entertainment. Starting with Mahjong, one of the world&apos;s most widely played strategy games, the platform combines
          {' '}<Highlighter action="highlight" color="oklch(0.5398 0.2198 29.39)" isView={inView}><span className="font-head font-semibold">intelligent gameplay systems</span></Highlighter>{' '}
          , social competition, and a Web3-enabled economy to create long-term engagement and sustainable value.
        </motion.p>
      </motion.div>
      <motion.div
        className="grid grid-cols-2 sm:flex flex-row gap-4 mt-8"
        variants={containerVariants}
      >
        <motion.div variants={buttonVariants} className="z-40">
          <Button asChild size={'xl'} variant={'default'} className="font-semibold">
            <Link href="/docs" prefetch={false}>Learn More <ArrowUpRight className="size-4 text-foreground/50" /></Link>
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} className="z-40">
          <Button asChild size={'xl'} variant={'accent'} className="font-semibold">
            <Link href="/token" prefetch={false}> Buy $TILE <ArrowUpRight className="size-4 text-foreground/50" /></Link>
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} className="col-span-2 sm:col-span-1 z-40 flex justify-center sm:block">
          <Button asChild size={'xl'} variant={'outline'} className="font-semibold">
            <Link href="mailto:info@thetilescompany.io" prefetch={false}>Contact Us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
