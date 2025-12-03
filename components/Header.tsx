import { cn } from '@/lib/utils';
import { headerNavLinks } from '@/lib/headerNavLinks';
// import SearchButton from '../search/SearchButton';
import ActiveLink from '@/components/ActiveLink';
import Image from 'next/image';
import Link from './Link';
import MobileNav from './MobileNav';
import { siteConfig } from '@/lib/config';
import Logo from '@/public/assets/icon.png';

export const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 p-6 max-w-full container-wide',
        className,
      )}
    >
      <div>
        <Link href="/" aria-label={siteConfig.logoTitle}>
          <div className="flex items-center gap-3 justify-between">
            <Image
              {...Logo}
              alt="The Tiles Company logo"
              height={34}
              width={34}
              className="group-hover:animate-wiggle "
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center leading-5 gap-4 sm:gap-6">
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.title}
            href={link.href}
            className="nav-link hidden sm:block"
            activeClassName="nav-link-active"
          >
            <span>{link.title}</span>
          </ActiveLink>
        ))}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
