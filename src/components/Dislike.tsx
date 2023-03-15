import { SVGProps } from "react"

const Dislike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={69}
    height={69}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={34.5} cy={34.5} r={33} stroke="red" strokeWidth={3} />
    <path
      d="M55.37 52.306a2.187 2.187 0 0 1 0 3.073 2.199 2.199 0 0 1-3.062 0L34.5 37.483 16.692 55.379a2.199 2.199 0 0 1-3.062 0 2.187 2.187 0 0 1 0-3.073l17.835-17.869L13.63 16.568a2.188 2.188 0 0 1 .143-2.929 2.172 2.172 0 0 1 2.919-.143L34.5 31.392l17.808-17.896a2.17 2.17 0 0 1 2.919.143 2.187 2.187 0 0 1 .143 2.93L37.535 34.436l17.835 17.87Z"
      fill="red"
    />
  </svg>
)

export default Dislike
