import { Link } from "react-router-dom";

// interface NavLink {
//   name: string;
//   href: string;
// }

// const navLinks: NavLink[] = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
//   { name: "Help", href: "/help" }
// ];

const sections: string[] = [
  "About Us",
  "Contact",
  "Help",
  "U.S. News",
  "Politics",
  "World",
  "Business",
  "Sports",
  "Investigations",
  "Culture & Trends",
  "Health",
  "Science",
  "Tech",
  "Weather",
  "Video Features",
  "Photos",
  "NBC Select",
  "NBC Asian America",
  "NBC BLK",
  "NBC Latino",
  "NBC Out"
];

export const Footer = () => {
  return (
    <div className="bg-[#0B1F3A] mx-0 text-white">
      <div className="w-full mx-auto px-6 py-10">
        <div className="flex flex-col md:flex md:flex-row gap-5">
          {/* Brand & Newsletter */}
          <div className="">
            <div className="flex h-[50px] w-[150px] items-center rounded-md bg-white">
              <img
                src="/BuzzLenz-Logo.png"
                alt="logo"
                className="object-cover"
              />
            </div>
          </div>
          {/* <div>
            <nav className="flex flex-col py-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block font-semibold text-sm text-gray-200 hover:text-blue-500 transition relative after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-500 after:rounded after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div> */}

          <div className="grid grid-cols-2 gap-y-2 gap-x-8">
            {sections.map((label) => (
              <Link
                key={label}
                to={`/${label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="block font-semibold text-sm text-gray-200 hover:text-blue-500 transition relative after:block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-blue-500 after:rounded after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 w-fit"
              >
                {label}
              </Link>
            ))}
          </div>

          <div>
            <div>
              <div className="font-semibold text-gray-200 mb-2">Follow Us</div>
              <div className="flex space-x-4 text-gray-100">
                {/* Facebook */}
                <Link
                  to="https://web.facebook.com/profile.php?id=100040140157602"
                  aria-name="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  target="_blank"
                  to="https://www.instagram.com/an_mmanuel?igsh=MXViNWhzajhldTczYg%3D%3D&utm_source=qr"
                  aria-name="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
                {/* YouTube */}
                <Link target="_blank" to="" aria-name="YouTube">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 2C5.12 20 12 20 12 20s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-200 text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </div>
      </div>
    </div>
  );
};
