import { cn } from '@/lib/utils'
import Link from './Link'
import { Button } from './ui/button'

export const Hero = () => {
  return (
    <div className="container mx-auto grid place-items-center">
      <div className="flex flex-col max-w-2xl gap-4 -mt-30">
        <div className="flex flex-col">
          <h1 className="text-secondary font-extrabold z-50">The Tiles Company</h1>
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold md:max-w-2xl text-primary-foreground font-display z-50",
          )}>
            Where Social Mahjong <br />Meets Web3
          </h2>
        </div>
        <p className='z-50 text-primary-foreground text-xl'>The Tiles Company is th Mahjong Stars, combining AI avatars, nonstop multiplayer liquidity, and the $TILE token to unlock a new social gaming economy for 600M mahjong fans worldwide.</p>
      </div>
      <div className="flex flex-row gap-4 mt-8">
        <Button asChild size={'xl'} variant={'accent'} className="z-50 font-semibold">
          <Link href="/docs" prefetch={false}>White Paper</Link>
        </Button>
        <Button asChild size={'xl'} variant={'outline'} className="z-50 font-semibold">
          <Link href="/docs" prefetch={false}>Follow us</Link>
        </Button>
      </div>
    </div>
  )
}
