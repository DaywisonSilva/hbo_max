import { Button } from '@components/atoms'
import { ListInfo } from '@components/molecules'
import getDuration from '@utils/getDuration'
import Image from 'next/image'
import React from 'react'
import { PlayCircle } from 'react-feather'
import * as Styles from './ContainerInfo.styles'

type ContainerInfoProps = {
  data: {
    release_date?: string
    certification?: Certification
    runtime?: number
    genres?: Genre[]
    title?: string
    name?: string
    vote_average: number
  }
}

function ContainerInfo({ data }: ContainerInfoProps) {
  return (
    <div className={Styles.containerInfo()}>
      <div style={{ zIndex: 2, position: 'relative' }}>
        <ListInfo
          year={data.release_date!.split('-')[0] || ''}
          certification={data?.certification?.release_dates[0].certification}
          duration={getDuration({ runtime: data.runtime })}
        />
        <h1 className={Styles.title()}>{data?.title || data?.name}</h1>
        <ListInfo type='genres'>
          {data.genres!.map((genre) => {
            return (
              <li key={genre.id} style={{ whiteSpace: 'nowrap' }}>
                {genre.name}
              </li>
            )
          })}
        </ListInfo>
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
    </div>
  )
}

export default ContainerInfo
