import { cn } from '@/lib/utils';
import { headerNavLinks } from '@/lib/headerNavLinks';
// import SearchButton from '../search/SearchButton';
import ActiveLink from '@/components/ActiveLink';
import Link from './Link';
import MobileNav from './MobileNav';
import { siteConfig } from '@/lib/config';
import { Logo as LogoComponent } from '@/components/logo';

export const Header = ({ className }: { className?: string }) => {
  return (
    <header
      className={cn(
        'flex items-center justify-between py-10 flex-wrap w-full mb-20 lg:mb-32 pt-6 p-6 max-w-full container-wide z-10!',
        'before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-[80px] before:sm:h-[96px]  before:right-0 before:bg-black/50 before:z-0',
        className,
      )}
    >
      <div className="relative z-10">
        <Link href="/" aria-label={siteConfig.logoTitle}>
          <div className="flex items-center gap-3 justify-between">
            <LogoComponent />
          </div>
        </Link>
      </div>
      <div className="relative z-10 flex items-center leading-5 gap-4 sm:gap-6">
        {headerNavLinks.map((link) => (
          <ActiveLink
            key={link.title}
            href={link.href}
            className="transition-all duration-300 nav-link hidden sm:block hover:text-secondary"
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
