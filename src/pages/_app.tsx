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
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 50%, #e8e8e8 100%)',
        zIndex: 9999,
        overflow: 'hidden',
      }}>
        {/* Diagonal Grid Pattern - matching hero section */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 50px,
              rgba(26, 26, 26, 0.08) 50px,
              rgba(26, 26, 26, 0.08) 51px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 50px,
              rgba(26, 26, 26, 0.08) 50px,
              rgba(26, 26, 26, 0.08) 51px
            )
          `,
          opacity: 0.6,
          pointerEvents: 'none',
        }} />
        
        {/* Logo Container with backdrop blur */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          padding: '4rem 3rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          animation: 'fadeInScale 0.8s ease-out',
        }}>
          <div style={{
            marginBottom: '2rem',
          }}>
            <Image 
              src={logo}
              alt="SAM SA Logo"
              width={250}
              height={125}
              priority
              style={{
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
          </div>
          
          {/* Loading Bar */}
          <div style={{
            width: '200px',
            height: '3px',
            background: 'rgba(26, 26, 26, 0.1)',
            borderRadius: '2px',
            overflow: 'hidden',
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
        </div>
        
        <style jsx>{`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.02);
            }
          }
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
