const Logo = ({ size = "md", color = "purple-500", className = "" }) => {
  const sizeClasses = {
    xs: "w-16 h-16 sm:w-20 sm:h-20",
    sm: "w-20 h-20 sm:w-24 sm:h-24",
    md: "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32",
    lg: "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44",
    xl: "w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64"
  };

  return (
    <svg 
      viewBox="0 0 150 150" 
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
    >
      <rect x="25" y="50" width="70" height="70" stroke={`rgb(var(--${color}))`} strokeWidth="3" className={`stroke-${color}`}/>
      <rect x="55" y="80" width="70" height="70" stroke={`rgb(var(--${color}))`} strokeWidth="3" className={`stroke-${color}`}/>
      <rect x="70" y="20" width="60" height="60" stroke={`rgb(var(--${color}))`} strokeWidth="3" className={`stroke-${color}`}/>
    </svg>
  );
};
export default Logo;