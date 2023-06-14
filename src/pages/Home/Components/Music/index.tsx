import { useEffect, useState } from 'react'
import { Author, Container, GifContainer, LogoContainer, Title } from './styles'
import DK from '../../../../assets/DKThumb.jpg'
import Star from '../../../../assets/StarOverhead.jpg'
import Spots from '../../../../assets/TheInkSpots.jpg'
import Logo from '../../../../assets/YouTubeMusic_Logo.png'
import Two from '../../../../assets/TwoOfUs.jpg'
import Ghost from '../../../../assets/Christmas.jpg'
import Time from '../../../../assets/Time.jpg'
import GoodBye from '../../../../assets/GoodBy.jpg'
import AudioWave from './LoadbarSound'

const musicList = [
  {
    thumb: Spots,
    title: "I Don't Want To Set The World On Fire",
    author: 'The Ink Spots',
    link: 'https://www.youtube.com/watch?v=6l6vqPUM_FE',
  },
  {
    thumb: Two,
    title: 'Just the Two of Us',
    author: 'Bill Withers',
    link: 'https://www.youtube.com/watch?v=KYwA5k00p2I',
  },
  {
    thumb: DK,
    title: 'Stickerbush Symphony',
    author: 'David Wise',
    link: 'https://www.youtube.com/watch?v=lndBgOrTWxo',
  },
  {
    thumb: Star,
    title: 'Star Overhead',
    author: 'The Pillows',
    link: 'https://www.youtube.com/watch?v=CMxCmmHkyCE',
  },
  {
    thumb: Ghost,
    title: 'Christmas of a Wandering Ghost',
    author: "Snail's House",
    link: 'https://music.youtube.com/watch?v=0t3mAuKYpI8&list=LM',
  },
  {
    thumb: Time,
    title: 'Time In A Bottle',
    author: 'Jim Croce',
    link: 'https://music.youtube.com/watch?v=9h1davKgBYM&list=LM',
  },
  {
    thumb: GoodBye,
    title: 'Goodbye To A World',
    author: 'Porter Robinson',
    link: 'https://music.youtube.com/watch?v=cdHdPu4JqSE&list=LM',
  },
]

export function Music() {
  const [currentMusicIndex, setCurrentMusicIndex] = useState<number | null>(
    null,
  )

  const currentMusic =
    currentMusicIndex !== null ? musicList[currentMusicIndex] : null

  useEffect(() => {
    const storedIndex = localStorage.getItem('currentMusicIndex')
    const initialIndex = storedIndex ? parseInt(storedIndex, 10) : null

    if (initialIndex === null) {
      const randomIndex = Math.floor(Math.random() * musicList.length)
      setCurrentMusicIndex(randomIndex)
      localStorage.setItem('currentMusicIndex', randomIndex.toString())
    } else {
      setCurrentMusicIndex(initialIndex)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMusicIndex((prevIndex) => {
        if (prevIndex !== null) {
          const newIndex = (prevIndex + 1) % musicList.length
          localStorage.setItem('currentMusicIndex', newIndex.toString())
          return newIndex
        }
        return null
      })
    }, 2 * 60000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!currentMusic) {
    return <div>Loading...</div>
  }

  return (
    <Container>
      <a href={currentMusic.link} target="_blank" rel="noopener noreferrer">
        <img src={currentMusic.thumb} alt="" />
      </a>
      <LogoContainer>
        <img src={Logo} alt="" />
        <GifContainer>
          <AudioWave />
          Última Tocada
        </GifContainer>
        <a href={currentMusic.link} target="_blank" rel="noopener noreferrer">
          <Title>{currentMusic.title}</Title>
          <Author>{currentMusic.author}</Author>
        </a>
      </LogoContainer>
    </Container>
  )
}
