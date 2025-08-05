import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Branding } from '@/components/top-navbar/branding';
import { TopNavbar } from '@/components/top-navbar/top-navbar';
import { Button } from '@/components/ui/button';

const Guide = () => {
  return (
    <>
      <TopNavbar
        branding={<Branding />}
        importantSection={
          <Button className="group self-end px-4 transition-all">
            <Link
              href="/"
              className="text-background flex items-center gap-1 rounded-sm">
              Back{' '}
              <ArrowRight className="text-background group-hover:translate-x-0.5" />
            </Link>
          </Button>
        }
      />
      {/** Guide */}
       <h1 className='mx-auto text-center my-6'>Guide will be updated soon</h1>
    </>
  );
};

export default Guide;
