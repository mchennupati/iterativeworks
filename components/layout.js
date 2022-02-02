import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();

  const menuItems = [
    {
      href: '/',
      title: 'Home',
    },
    {
        href: '/marketwise',
        title: 'MarketWise',
      },
      {
        href: '/keepthekidsbusy',
        title: 'Keep the Kids Busy',
      },
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/contact',
      title: 'Contact',
    },

  ];

  return (
    
    <div className='flex flex-col flex-grow min-h-screen my-36 mx-96'>

      <header className='top-0 flex items-center justify-center h-40 font-semibold uppercase bg-white-200'>
      
         <img className = 'h-40' src='/logo.png' alt='logo' />

      </header>
      <div className='flex flex-col flex-1 my-20 md:flex-row'>
        <aside className='w-full bg-white-100 md:w-60'>
          <nav>
            <ul>
              {menuItems.map(({ href, title }) => (
                <li className='m-2' key={title}>
                  <Link href={href}>
                    <a
                      className={`flex p-2 bg-white-200 rounded hover:bg-slate-300 font-semibold cursor-pointer ${
                        router.asPath === href && 'bg-white-600 text-black'
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>
      <footer>
      <p className = 'items-center justify-center font-semibold' >
        Iterative Works Gmbh, c/o WeWork Oskar-von-Miller Ring 20, Munich 80333, DE
      </p>
    </footer>
    </div>
  );
}
