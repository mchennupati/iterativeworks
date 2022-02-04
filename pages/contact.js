import Link from 'next/link'


export default function Contact() {
    return (
     
          
          <div className='flex flex-col h-full mx-10 my-5 font-bold items-left'>

<h1 className = 'font-bold text-blue-600 hover:text-blue-800 visited:text-purple-600 text-[25px]'><Link href = "https://getmarketwise.io"><a target="_blank"> Get in Touch !</a></Link></h1>

<h3 className = "my-5 font-semibold text-[18px]"><Link href="mailto:hello@iterativeworks.io">hello@iterativeworks.io</Link></h3>

<p className = "my-5 font-semibold"> The financial industry needs a lot of software .... </p>

  <p className = "my-5 font-semibold">We understand the industry well and think we write good software (!) </p>

  <p className = "my-5 font-semibold"> If you want to work together or have any suggestions on how we can improve, please drop us a line !  </p>

  <p className = "my-5 font-semibold"> For each of the apps, you can go to the dedicated page and talk to us via the chat.</p>

  <h3 className = "my-5 font-semibold text-[24px]"><Link href="/about">Want to Work Together ?</Link></h3>
   
   <p className = "my-5 font-semibold">We love to work with a diverse bunch of people who want to do a good job of whatever they take up, first find out more about us :) <Link className = 'font-bold text-blue-600' href= "/about"><a>here</a></Link> and drop us an email !...</p>





</div>
    
    );
  }
  