const Footer = () => {
  return (
    <div className="bg-base-200 dark:bg-white/20">
      <div className="mx-auto w-11/12 max-w-[1280px] pt-20">
        <h3
          className="text-3xl text-black dark:text-white dark:text-dTextSecondary  font-semibold mb-8 font-Montserrat"
        >
          Taste Odyssey
        </h3>
        <div className="flex items-start flex-col-reverse md:flex-row  justify-between gap-8 ">
          <div className="">
            <p className="max-w-[450px] dark:text-white/60 text-base font-normal mb-6">
            Embark on a culinary journey where flavors meet creativity. Discover dishes crafted with passion and inspired by cultures around the world.
            </p>
          </div>
          <div className="flex items-start flex-col md:flex-row justify-between gap-6">
            <div className="">
              <h3 className="mb-6 text-lg text-black dark:text-white font-medium">
                Social Media
              </h3>
              <ul className="flex md:flex-col gap-4">
                <li>
                  <a
                    className="hover:underline dark:text-white/60"
                    href=""
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline dark:text-white/60"
                    href=""
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline dark:text-white/60"
                    href=""
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline dark:text-white/60"
                    href=""
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <h3 className="mb-6 text-lg text-black font-medium dark:text-white">
                Contact Info
              </h3>
              <ul className="flex md:flex-col gap-4">
                <li>
                  <a
                    className="hover:underline dark:text-white/60"
                    href=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline dark:text-white/60"
                    href=""
                  >
                    Contact Us
                  </a>
                </li>
                {/* <li><a href="">Address</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-SecondaryColor dark:border-white mt-6">
          <p className="text-center dark:text-white/60">
            © 2024 Taste Odyssey. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
