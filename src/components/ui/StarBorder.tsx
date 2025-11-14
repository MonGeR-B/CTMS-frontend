import React from 'react';

type StarBorderProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
  className?: string;
  children?: React.ReactNode;
  color?: string;
  speed?: React.CSSProperties['animationDuration'];
  thickness?: number;
};

const StarBorder = <T extends React.ElementType = 'button'>({
  as,
  className = '',
  color = 'white',
  speed = '6s',
  thickness = 1,
  children,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || 'button';

  return (
    <Component
      className={`relative overflow-hidden ${className}`}
      {...(rest as any)}
      style={{
        padding: `${thickness}px 0`,
        ...(rest as any).style,
      }}
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `conic-gradient(from 0deg, transparent, ${color}, transparent)`,
          animation: `spin ${speed} linear infinite`,
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `conic-gradient(from 180deg, transparent, ${color}, transparent)`,
          animation: `spin ${speed} linear infinite reverse`,
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Component>
  );
};

export default StarBorder;
