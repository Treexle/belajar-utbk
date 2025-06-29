import { cn } from "../../lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <svg
      width="180"
      height="40"
      viewBox="0 0 200 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-fit mx-auto", className)}
    >
      <defs>
        <linearGradient
          id="text-gradient"
          x1="1"
          y1="0"
          x2="90"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#da22d2" />
          <stop offset="1" stopColor="#1fcd7f" />
        </linearGradient>
      </defs>
      <text
        x="50"
        y="30" //ini yang bikin teks nya ditengah
        className="mx-auto hover:scale-105 transform transform-origin-center transition-transform duration-150"
        fontSize="30"
        fontWeight="bold"
        fill="url(#text-gradient)"
        fontFamily="Grandstander"
      >
        Skorin
      </text>
    </svg>
  );
};
