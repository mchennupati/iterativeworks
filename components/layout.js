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
    
    <div className='flex flex-col flex-grow w-full min-h-screen my-20 md:flex md:flex-row'>


      <div className='flex flex-col flex-1 mx-20 my-50 md:flex-row'>
        <aside className='w-60 bg-white-100 md:w-50'>
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

    </div>
  );
}
