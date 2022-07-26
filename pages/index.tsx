import Loading from '@components/common/loading/Loading';
import SEO from '@components/common/seo/SEO';
import WhoAmI from '@components/who_am_i/WhoAmI';
import type { NextPage } from 'next'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <SEO title='Home'/>
      {/* <Loading /> */}
      <WhoAmI />
      <Link href="/developer">
          <a className={router.pathname === "/" ? "active" : ""}>Developer</a>
      </Link>
      <br/>
      <Link href="/artist">
          <a className={router.pathname === "/" ? "active" : ""}>Artist</a>
      </Link>
    </>
  )
}

export default Home;
