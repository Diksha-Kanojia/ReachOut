import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "#hero" },
  { name: "Helplines", href: "#helplines" },
  { name: "Resources", href: "#resources" },
  { name: "Assessment", href: "#assessment" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    // If not on home page, navigate to home first, then scroll
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: href.substring(1) } });
    } else {
      // We're on home page, just smooth scroll
      const targetId = href.substring(1); // Remove the '#'
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    // Close mobile menu if it's open
    setMobileMenuOpen(false);
  };

  const handleChatClick = (e) => {
    e.preventDefault();
    navigate("/chatbot");
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-transparent flex items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button 
            onClick={() => navigate("/")}
            className="-m-1.5 p-1.5 cursor-pointer"
          >
            <h1 className="text-3xl font-bold text-white">ReachOut</h1>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-500"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xl font-semibold text-white hover:text-grey-400 cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={handleChatClick}
            className="text-xl font-bold text-white hover:text-grey-400 cursor-pointer"
          >
            Chat It Out <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>

      {/* Mobile menu (drawer) */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-xl sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => {
                navigate("/");
                setMobileMenuOpen(false);
              }}
              className="-m-1.5 p-1.5 cursor-pointer"
            >
              <h1 className="text-3xl font-bold text-white">ReachOut</h1>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-500"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block w-full text-left rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-gray-800 cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={handleChatClick}
                  className="block w-full text-left rounded-lg px-3 py-2.5 text-base font-bold text-white hover:bg-gray-800 cursor-pointer"
                >
                  Chat It Out 
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}