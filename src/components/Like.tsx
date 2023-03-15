import { SVGProps } from "react"

const Like = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={69}
    height={69}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m35 61-3.625-3.38C18.5 45.657 10 37.742 10 28.086 10 20.173 16.05 14 23.75 14c4.35 0 8.525 2.075 11.25 5.328C37.725 16.075 41.9 14 46.25 14 53.95 14 60 20.173 60 28.087c0 9.656-8.5 17.57-21.375 29.532L35 61Z"
      fill="url(#a)"
    />
    <circle cx={34.5} cy={34.5} r={33} stroke="#00A441" strokeWidth={3} />
    <defs>
      <linearGradient
        id="a"
        x1={45.507}
        y1={28.688}
        x2={26.633}
        y2={33.702}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#04E25D" />
        <stop offset={1} stopColor="#1E7400" />
      </linearGradient>
    </defs>
  </svg>
)

export default Like
