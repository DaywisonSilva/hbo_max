import React, { useRef, useState } from 'react'
import * as Styles from './Hero.styles'
import { VolumeX, Volume2 } from 'react-feather'
import Header from '../Header'

function Hero() {
  const [hasAudio, setHasAudio] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleWithVolume = () => {
    videoRef.current!.muted = !hasAudio
    setHasAudio(!hasAudio)
  }

  return (
    <>
      <Header />
      <section className={Styles.container()}>
        <video autoPlay muted loop className={Styles.video()} ref={videoRef}>
          <source src='justice_league.mp4' type='video/mp4' />
          Your browser does not support HTML5 video.
        </video>
        <div className={Styles.containerIcon()} onClick={handleWithVolume}>
          {hasAudio ? (
            <VolumeX className={Styles.icon()} />
          ) : (
            <Volume2 className={Styles.icon()} />
          )}
        </div>
      </section>
    </>
  )
}

export default Hero
