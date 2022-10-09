import React, { useRef, useState } from 'react'
import * as Styles from './Hero.styles'
import { VolumeX, Volume2 } from 'react-feather'
import getDuration from '@utils/getDuration'
import Image from 'next/image'
import { Button } from '@components/atoms'
import { PlayCircle } from 'react-feather'
import { ListInfo } from '@components/molecules'
import ContainerInfo from '../ContainerInfo'

type HeroProps = {
  data: Movie & {
    runtime: number
    genres: Array<{ id: number; name: string }>
    certification: Certification
  }
}

function Hero({ data }: HeroProps) {
  const [hasAudio, setHasAudio] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleWithVolume = () => {
    videoRef.current!.muted = !hasAudio
    setHasAudio(!hasAudio)
  }

  return (
    <section className={Styles.container()}>
      <video
        autoPlay
        muted
        loop
        className={Styles.video()}
        ref={videoRef}
        onContextMenu={(e) => e.preventDefault()}
      >
        <source src='justice_league.mp4' type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>

      <ContainerInfo data={data} />

      <div className={Styles.containerIcon()} onClick={handleWithVolume}>
        {hasAudio ? (
          <VolumeX className={Styles.icon()} />
        ) : (
          <Volume2 className={Styles.icon()} />
        )}
      </div>
    </section>
  )
}

export default Hero
