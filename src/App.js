import React from 'react'
import './App.css'

function App () {
  const refToVideo = React.useRef()

  const play = () => refToVideo.current.play()

  const pause = () => refToVideo.current.pause()

  return (
    <>
      <video ref={refToVideo} width='320' height='176' controls>
        <source
          src='https://www.youtube.com/watch?v=CoOXbP7hmc0'
          type='video/mp4'
        />
      </video>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </>
  )
}

export default App
