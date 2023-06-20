import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 pt-16 pb-2">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
      <div>
      <div
      className="flex justify-center py-3 mt-8 text-gray-800 border-t border-stone-300">
        <div>
          Made by
          <a
            href="https://github.com/AshishBarvaliya"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1 text-gray-900 hover:text-red-500 underline"
          >
            Ashish
          </a>
          with
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nextjs.org/"
            className="px-1 hover:text-red-500 underline"
          >
            Nextjs
          </a>
          &
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-1 hover:text-red-500 underline"
          >
            TailwindCSS
          </a>
          . Deployed on
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-1 hover:text-red-500 underline"
          >
            Netlify
          </a>
          .
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
