import React from "react";
import { SignIn } from "@clerk/clerk-react";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#e9e9e7] p-2 md:p-3">
      <div className="min-h-[calc(100vh-16px)] bg-white rounded-[22px] border border-black overflow-hidden">

        {/* Navbar */}
        <Navbar />

        {/* Login */}
        <main className="min-h-[calc(100vh-86px)] flex items-center justify-center px-5 py-12">
          <div className="flex flex-col items-center">

            {/* Badge */}
            <div className="inline-flex items-center border border-gray-300 bg-white px-3 py-1 mb-6">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[1.5px] font-semibold text-gray-600">
                Welcome Back
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                text-black
                uppercase
                text-center
                font-black
                tracking-[-2px]
                leading-[0.9]
                text-[42px]
                sm:text-[52px]
                md:text-[64px]
                mb-8
              "
              style={{
                fontFamily:
                  "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
              }}
            >
              Sign In
            </h1>

            {/* Clerk */}
            <div
              className="
                bg-[#f7f7f5]
                border
                border-black
                rounded-[20px]
                p-2
              "
            >
              <SignIn
                afterSignInUrl="/"
                appearance={{
                  elements: {
                    card: `
                      shadow-none
                      border-0
                      bg-transparent
                    `,
                    headerTitle: `
                      hidden
                    `,
                    headerSubtitle: `
                      hidden
                    `,
                    socialButtonsBlockButton: `
                      border-black
                      text-black
                      bg-white
                      hover:bg-black
                      hover:text-white
                      transition-all
                    `,
                    formButtonPrimary: `
                      bg-black
                      text-white
                      border
                      border-black
                      hover:bg-white
                      hover:text-black
                      transition-all
                    `,
                    formFieldInput: `
                      border-gray-300
                      focus:border-black
                      focus:ring-0
                    `,
                    footerActionLink: `
                      text-black
                      hover:underline
                    `,
                  },
                }}
              />
            </div>

          </div>
        </main>

      </div>
    </div>
  );
};

export default Login;