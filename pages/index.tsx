import Loading from '@components/common/loading/Loading';
import SEO from '@components/common/seo/SEO';
import WhoAmI from '@components/whoAmI';
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <SEO title='Home'/>
      {/* <Loading /> */}
      <div className='h-screen'>
        <div className='h-1/6'>
        <WhoAmI />
        </div>
        <div className='grid grid-cols-2 h-5/6'>
          <Link href="/developer">
            <div className='h-full bg-neutral-400  border-solid border-violet-500 hover:bg-neutral-700 hover:border-8 '>
              <a className={router.pathname === "/" ? "active" : ""} >Developer</a>
            </div>
          </Link>
          <Link href="/artist">
            <div className='h-full bg-neutral-400  border-solid border-violet-500 hover:bg-neutral-700 hover:border-8 '>
              <a className={router.pathname === "/" ? "active" : ""} >Artist</a>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home;
