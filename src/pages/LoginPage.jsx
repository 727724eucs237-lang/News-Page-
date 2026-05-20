import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [inputValue, setInputValue] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 bg-gray-50/50">
      <div className="bg-white p-8 sm:p-10 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 w-full max-w-[480px]">
        <div className="text-center mb-8">
          <p className="text-[#333333] text-[17px] font-medium leading-snug">
            Log in to unlock exclusive content and enjoy a premium experience.
          </p>
        </div>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none border-r border-gray-200 pr-3">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter email id or mobile"
              className="w-full pl-16 pr-4 py-3.5 rounded border border-gray-300 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 focus:ring-0 transition-colors"
            />
          </div>
          
          <p className="text-[13px] text-gray-500 font-medium">We'll send you an OTP to verify</p>
          
          <div className="flex items-start gap-3 mt-6">
            <div className="flex items-center h-5 mt-0.5">
              <input 
                id="terms" 
                type="checkbox" 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-5 h-5 border border-gray-300 rounded-sm text-[#444444] focus:ring-0 cursor-pointer accent-[#444444]"
              />
            </div>
            <label htmlFor="terms" className="text-[13.5px] text-gray-600 leading-relaxed cursor-pointer">
              By signing in or creating an account, you agree with News Daily <a href="#" className="text-gray-500 underline hover:text-gray-800">Terms & Conditions</a> and <a href="#" className="text-gray-500 underline hover:text-gray-800">Privacy Policy.</a>
            </label>
          </div>
          
          <button 
            type="submit" 
            disabled={!inputValue || !agreed}
            className={`w-full py-3.5 mt-2 rounded font-bold text-[15px] transition-colors ${inputValue && agreed ? 'bg-[#D32F2F] text-white hover:bg-red-800' : 'bg-[#E5E5E5] text-[#888888] cursor-not-allowed'}`}
          >
            Continue
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-[15px]">
            <span className="px-4 bg-white text-gray-400 font-medium">Or Continue With</span>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full py-3 px-4 border border-gray-300 rounded bg-white hover:bg-gray-50 flex items-center justify-center gap-3 transition-colors text-black font-semibold text-[15px]">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
          <button className="w-full py-3 px-4 border border-gray-300 rounded bg-white hover:bg-gray-50 flex items-center justify-center gap-3 transition-colors text-black font-semibold text-[15px]">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.365 7.112c.791-.97 1.326-2.316 1.18-3.662-1.154.047-2.585.782-3.411 1.761-.734.86-1.378 2.236-1.196 3.535 1.285.099 2.635-.662 3.427-1.634zM16.892 7.784c-1.895-.032-3.413 1.144-4.385 1.144-.95 0-2.253-1.077-3.794-1.045-1.996.031-3.84 1.178-4.872 2.973-2.096 3.659-.533 9.07 1.503 12.029.996 1.458 2.179 3.082 3.753 3.02 1.512-.063 2.1-.989 3.931-.989 1.811 0 2.35.989 3.932.958 1.637-.031 2.63-1.488 3.606-2.926 1.134-1.667 1.6-3.284 1.621-3.367-.036-.016-3.111-1.203-3.14-4.8-.029-3.013 2.435-4.464 2.548-4.529-1.408-2.074-3.593-2.357-4.703-2.468z" />
            </svg>
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
