import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (minimum 1.5 seconds for smooth experience)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        zIndex: 9999,
      }}>
        <Image
          src={logo}
          alt="SAM SA Logo"
          width={250}
          height={125}
          priority
        />
        <div style={{
          width: '200px',
          height: '3px',
          background: 'rgba(26, 26, 26, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginTop: '2rem',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '50%',
            background: '#1a1a1a',
            borderRadius: '2px',
            animation: 'loading 1.5s ease-in-out infinite',
          }} />
        </div>
        <style jsx>{`
          @keyframes loading {
            0% {
              left: -50%;
            }
            100% {
              left: 100%;
            }
          }
        `}</style>
      </div>
    );
  }

  return <Component {...pageProps} />;
}
