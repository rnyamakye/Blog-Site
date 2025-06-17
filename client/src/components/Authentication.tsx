import React, { useState, Fragment } from "react";
import { Dialog, Transition, Tab } from "@headlessui/react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../auth/firebase";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const AuthPopover: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Open popover
  const openPopover = () => {
    setIsOpen(true);
    setError(null);
    setEmail("");
    setPassword("");
  };

  // Close popover (can be used by button or Dialog onClose)
  const closePopover = () => {
    setIsOpen(false);
    setError(null);
  };

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      closePopover();
      alert("Sign up successful!");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      closePopover();
      alert("Sign in successful!");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      closePopover();
      alert("Signed in with Google!");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <button
        onClick={openPopover}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Sign In
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 focus:outline-none"
          onClose={closePopover}
        >
          <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-black/30 backdrop-blur-md">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in duration-300"
                enterFrom="opacity-0 scale-90"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-75"
              >
                <Dialog.Panel className="relative w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
                  {/* Close Button */}
                  <button
                    onClick={closePopover}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4">
                    Authentication
                  </Dialog.Title>

                  <Tab.Group>
                    <Tab.List className="flex space-x-4 border-b mb-4">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full py-2 text-center text-sm font-medium",
                            selected
                              ? "border-b-2 border-blue-600 text-blue-600"
                              : "text-gray-500 hover:text-blue-600"
                          )
                        }
                      >
                        Sign In
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "w-full py-2 text-center text-sm font-medium",
                            selected
                              ? "border-b-2 border-blue-600 text-blue-600"
                              : "text-gray-500 hover:text-blue-600"
                          )
                        }
                      >
                        Sign Up
                      </Tab>
                    </Tab.List>

                    <Tab.Panels>
                      <Tab.Panel>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleSignIn();
                          }}
                          className="space-y-4"
                        >
                          <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                          {error && (
                            <p className="text-red-600 text-sm">{error}</p>
                          )}
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                          >
                            {loading ? "Signing in..." : "Sign In"}
                          </button>
                        </form>

                        <div className="mt-4 text-center">
                          <button
                            onClick={handleGoogleSignIn}
                            disabled={loading}
                            className="inline-flex items-center justify-center gap-2 w-full py-2 border border-gray-300 rounded hover:bg-gray-100 transition"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                              width="20"
                              height="20"
                              className="inline-block"
                            >
                              <path
                                fill="#EA4335"
                                d="M24 9.5c3.54 0 6.7 1.22 9.18 3.6l6.85-6.85C34.75 2.9 29.77 1 24 1 14.84 1 7.11 6.9 3.8 14.7l7.97 6.2C13.9 15.1 18.4 9.5 24 9.5z"
                              />
                              <path
                                fill="#4285F4"
                                d="M46.5 24.5c0-1.6-.14-3.13-.4-4.6H24v9h12.7c-.55 3-2.6 5.6-5.5 7.3l8.4 6.5c4.9-4.5 7.9-11.3 7.9-18.2z"
                              />
                              <path
                                fill="#FBBC05"
                                d="M11.77 28.9c-.5-1.5-.8-3.1-.8-4.9s.3-3.4.8-4.9l-7.97-6.2C1.5 17.7 0 20.7 0 24s1.5 6.3 3.8 8.9l7.97-6.2z"
                              />
                              <path
                                fill="#34A853"
                                d="M24 46c6.5 0 11.9-2.1 15.9-5.7l-7.9-6.1c-2.2 1.5-5 2.4-8 2.4-5.6 0-10.4-3.8-12.1-8.9l-8 6.1C7.1 41.6 14.8 46 24 46z"
                              />
                              <path fill="none" d="M0 0h48v48H0z" />
                            </svg>
                            Sign in with Google
                          </button>
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleSignUp();
                          }}
                          className="space-y-4"
                        >
                          <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            minLength={6}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                          {error && (
                            <p className="text-red-600 text-sm">{error}</p>
                          )}
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                          >
                            {loading ? "Signing up..." : "Sign Up"}
                          </button>
                        </form>
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AuthPopover;
