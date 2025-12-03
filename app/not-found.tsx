import Link from '@/components/Link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full items-center fancy-overlay h-screen container mx-auto">
      <Header />
      <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
        <div className="space-x-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-6xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="mb-8">
            Please head back to the homepage or contact us if you think this is
            an error.
          </p>
          <Button asChild size={'xl'} className="font-bold hover:bg-accent/80">
            <Link
              href="/"
            >
              Back to homepage
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
