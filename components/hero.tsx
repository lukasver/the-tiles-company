"use client"

import { cn } from '@/lib/utils'
import Link from './Link'
import { Button } from './ui/button'
import { motion } from 'framer-motion'
import { Highlighter } from './ui/highlighter'
import { useEffect, useState } from 'react'
import { SparklesText } from './ui/sparkles-text'

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
    setInView(true)
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
            className="text-secondary font-extrabold z-50"
            variants={itemVariants}
          >
            The Tiles Company
          </motion.h1>
          <motion.h2
            className={cn(
              "relative text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold md:max-w-2xl text-primary-foreground font-display z-50",
              "text-center md:text-left"
            )}
            variants={itemVariants}
          >
            Where Social <SparklesText
              className="inline-block"
            > Mahjong</SparklesText> <br />Meets <Highlighter action="underline" color="oklch(0.5398 0.2198 29.39)" isView={inView}>Web3</Highlighter>
          </motion.h2>
        </div>
        <motion.p
          className='z-50 text-primary-foreground text-xl relative text-center md:text-left'
          variants={itemVariants}
        >
          The Tiles Company connects AI gameplay, multi‑platform access, and the
          {' '}<Highlighter action="highlight" color="oklch(0.5398 0.2198 29.39)" isView={inView}>$TILE</Highlighter>{'  '}
          token into a compliant, scalable Web3 layer that powers Mahjong Stars new social gaming and rewards model.
        </motion.p>
      </motion.div>
      <motion.div
        className="flex flex-row gap-4 mt-8"
        variants={containerVariants}
      >
        <motion.div variants={buttonVariants} className="z-50">
          <Button asChild size={'xl'} variant={'accent'} className="font-semibold">
            <Link href="/docs" prefetch={false}>White Paper</Link>
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Button asChild size={'xl'} variant={'outline'} className="font-semibold">
            <Link href="/docs" prefetch={false}>Follow us</Link>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
