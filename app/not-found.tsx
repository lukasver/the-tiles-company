import Link from '@/components/Link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full items-center fancy-overlay min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="flex flex-col items-center justify-center text-center md:flex-row md:items-center md:justify-center md:text-left md:space-x-6 lg:space-x-8 py-8 md:py-12 lg:py-16">
        <div className="mb-6 md:mb-0 md:space-y-5">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem] font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 lg:px-8 border-gray-300 dark:border-gray-700">
            404
          </h1>
        </div>
        <div className="max-w-md space-y-4 md:space-y-6">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Please head back to the homepage or contact us if you think this is
            an error.
          </p>
          <div className="pt-2 md:pt-4">
            <Button asChild size={'lg'} className="w-full sm:w-auto font-bold hover:bg-accent/80 text-sm sm:text-base md:text-lg px-6 md:px-8">
              <Link
                href="/"
              >
                Back to homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
