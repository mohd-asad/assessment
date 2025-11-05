import React from "react";

export default function Login() {
  const backend = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  return (
    <div className="min-h-screen  flex items-center justify-center  bg-gray-50">
      <div className="bg-white p-8  rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
        <p className="text-sm text-gray-500 mb-6">
          Continue with your preferred provider
        </p>

        {/* Google Login */}
        <a href={`${backend}/auth/google`}>
          <button className="w-full mt-4 bg-[#FEECEB] hover:bg-[#FAD7D5] flex items-center justify-center h-12 rounded-full transition cursor-pointer">
            <img src="/icons/google.svg" alt="googleLogo" className="h-6" />
          </button>
        </a>

        {/* GitHub Login */}
        <a href={`${backend}/auth/github`}>
          <button
            type="button"
            className="w-full mt-4 bg-[#F0F0F0] hover:bg-[#DADADA] flex items-center justify-center h-12 rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            <img
              src="/icons/github.svg"
              alt="githubLogo"
              className="h-6"
            />
          </button>
        </a>

        {/* Facebook Login */}
        <a href={`${backend}/auth/facebook`}>
          <button
            type="button"
            className="w-full mt-4 bg-[#E8F0FE] hover:bg-[#D7E3FC] flex items-center justify-center h-12 rounded-full hover:bg-gray-200 transition cursor-pointer"
          >
            <img
              src="/icons/facebook.svg"
              alt="facebookLogo"
              className="h-6"
            />
          </button>
        </a>

        <p className="text-xs text-gray-400 mt-6">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
