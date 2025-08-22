import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
interface LogoProps {
  width: number
  height?: number
  className?: string
  src?: string
  locale?: string
  
}
const Logo: FC<LogoProps> = ({
  width,
  height,
  className,
  src = '/images/logo.jpg',
  locale = 'es'
}) => {
  return (
    <Link href={`/${locale}`} type='button' className='text-white'>
      <Image
        src={src}
        priority={true}
        width={width}
        height={height}
        alt='Logo Mega Arte'
        className={`rounded-xl ${className}`}
        quality={85}
      />
    </Link>
  )
}

export default Logo
