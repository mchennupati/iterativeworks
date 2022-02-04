/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

function keepthekidsbusy() {
  return (
    <div className="flex flex-col h-full mx-10 my-5 font-bold items-left">
      <h1 className="font-bold text-blue-600 hover:text-blue-800 visited:text-purple-600 text-[25px]">
        <Link href="https://keepthekidsbusy.io">
          <a target="_blank">Keep The Kids Busy !</a>
        </Link>
      </h1>

      <h3 className="my-5 font-semibold">
        KtK is a simple events list to bring spontaneity back in a child's life
        !
      </h3>

      <p className="my-5 font-semibold text-justify">
        {" "}
        Friends, grandparents or uncles and aunts, Simply create an event that
        lets the kids know when you are free and what you are doing.{" "}
      </p>

      <p className="my-5 font-semibold">
        Create a simple calendar event using the form - Join in virtually or in
        real life !{" "}
      </p>

      <p className="my-5 font-semibold">
        {" "}
        Kids can then look up what's on that day or next and simply join in....{" "}
      </p>

      <p className="my-5 font-semibold">
        {" "}
        Play a computer game together, Read a book or organize a football match
        !
      </p>

      <Link href="https://keepthekidsbusy.io">
        <a target="_blank">
          <img src="/ktk.png" alt="logo" />
        </a>
      </Link>
    </div>
  );
}

export default keepthekidsbusy;
