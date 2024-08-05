import * as React from 'react'
import Link from 'next/link'

export function Brand(): React.ReactElement {
  return (
    <Link href={'/'} className="transition-all duration-300 hover:scale-95">
      <svg
        width="32"
        height="33"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.1556 32.3852C12.3158 31.3017 9.37808 28.6397 8.12204 25.5796C6.87528 22.5421 7.27883 19.1185 10.1053 16.3646C12.7797 13.759 15.8064 11.6482 19.0294 10.1254C21.0747 9.15903 22.9299 9.00625 24.5205 9.41319C26.1164 9.8215 27.4962 10.8064 28.5562 12.1987C30.6835 14.9931 31.478 19.3798 30.0968 23.6891C28.0269 30.1468 21.7294 33.9581 16.1556 32.3852Z"
          className="stroke-foreground"
          strokeWidth="1.19027"
        />
        <path
          d="M9.50934 23.4869C9.0889 23.1566 9.05892 22.5961 9.37577 22.241C9.69262 21.8859 10.286 21.8151 10.7065 22.1454C11.1269 22.4757 11.1569 23.0362 10.84 23.3913C10.5232 23.7464 9.92979 23.8172 9.50934 23.4869Z"
          className="stroke-foreground"
          strokeWidth="1.19027"
        />
        <path
          d="M15.4398 33.0034C7.08443 33.0034 0.230127 25.6049 4.27392 18.2932C6.08103 15.0258 8.38733 12.1423 11.0719 9.77876C18.0858 3.60357 26.7192 10.9717 26.7192 20.3166C26.7192 27.3133 21.6603 33.0034 15.4398 33.0034Z"
          className="fill-foreground"
        />
        <ellipse
          cx="1.47691"
          cy="1.54318"
          rx="1.47691"
          ry="1.54318"
          transform="matrix(-0.415489 0.909598 -0.927789 -0.373106 8.75684 24.1145)"
          className="fill-background"
        />
      </svg>
    </Link>
  )
}
