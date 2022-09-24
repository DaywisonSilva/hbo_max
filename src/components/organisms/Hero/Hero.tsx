import React, { useRef, useState } from 'react'
import * as Styles from './Hero.styles'
import { VolumeX, Volume2 } from 'react-feather'
import getDuration from '@utils/getDuration'
import Image from 'next/image'
import { Button } from '@components/atoms'
import { PlayCircle } from 'react-feather'

type HeroProps = {
  data: Movie & { runtime: number; genres: Array<{ id: number; name: string }> }
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
      <video autoPlay muted loop className={Styles.video()} ref={videoRef}>
        <source src='justice_league.mp4' type='video/mp4' />
        Your browser does not support HTML5 video.
      </video>
      <div className={Styles.containerInfo()}>
        <ul className={Styles.infoList()}>
          <li>{data.release_date.split('-')[0]}</li>
          <li>PG-13</li>
          <li>{getDuration({ runtime: data.runtime })}</li>
        </ul>
        <h1 className={Styles.title()}>{data.title}</h1>
        <ul className={Styles.infoList({ type: 'genres' })}>
          {data.genres.map((genre) => {
            return (
              <li key={genre.id} style={{ whiteSpace: 'nowrap' }}>
                {genre.name}
              </li>
            )
          })}
        </ul>
        <div className={Styles.star()}>
          <Image
            width={40}
            height={40}
            src='/img/star.svg'
            objectFit='contain'
            alt='rate'
          />
          <span>{data.vote_average.toFixed(2)}</span>
        </div>
        <Button outlined>
          <span className={Styles.buttonContainer()}>
            <PlayCircle />
            <span>Watch Now</span>
          </span>
        </Button>
      </div>

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
