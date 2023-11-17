import React from "react"
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="mt-20">
        <footer
  className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
  <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
    © 2023 Copyright:
    <a
      className="text-neutral-800 dark:text-neutral-400"
      href="https://tailwind-elements.com/"
      >OpenFinz</a>
     {/* <Image
      priority
      src="{TwitterIcon}"
      height={32}
      width={32}
      alt="Follow us on Twitter"
    /> */}
    {/* <TwitterIcon className="abc"/> */}
  </div>
</footer>
</div>
    )   
}

export default Footer
