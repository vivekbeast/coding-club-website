"use client";
import { Suspense, useEffect } from "react";
import LottieAnima from "./LottieAnima";

export default function Home() {

  




  useEffect(() => {
    // redirect('/api/auth/login?post_login_redirect_url=/dashboard')
    window.location.href = '/api/auth/login?post_login_redirect_url=/dashboard';
  }, []);

  return (
    <div className=" h-screen w-screen flex items-center justify-center place-items-center">
      <Suspense fallback={<p>Loading feed...</p>}>
        {/* Add the component to be rendered within Suspense */}
        <LottieAnima />
      </Suspense>
    </div>
  );
}
