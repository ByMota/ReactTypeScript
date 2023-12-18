// Adicione funcionalidades ao player de vídeo:

// 1 - Use um estado reativo para verificar se o vídeo está tocando ou não.
// 2 - Função para avançar o vídeo em +2s.
// 3 - Função para alterar o playbackRate do vídeo.
// 4 - Função para entrar/sair do modo pictureInPicture.
// 5 - Função para alternar o som (mudo/não mudo) do vídeo.

import { useEffect, useRef, useState } from "react";
import videoSrc from "../assets/video.mp4"

export function UseRef() {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  
  function forward(){
    if(video.current){
      video.current.currentTime += 2
    }
  }

  function changePlayBackRate(speed: number){
    if (!video.current) return;
    video.current.playbackRate = speed
  }

  async function pictureInPicture(){
    if(!video.current) return;
    if(document.pictureInPictureElement){
      await document.exitPictureInPicture()
    }
    else{
      await video.current.requestPictureInPicture()
    }
  }

  function mute(){
    if (!video.current) return;
    video.current.muted = !video.current.muted
  }

  return ( 
    <>
    <div>
      <div className="flex">
        {
          playing ? <button onClick={()=> video.current?.pause()}>Pause</button>: <button onClick={()=> video.current?.play()}>Play</button> 
        }
        <button onClick={forward}>+2s</button>
        <button onClick={()=> changePlayBackRate(1)}>1x</button>
        <button onClick={()=> changePlayBackRate(2)}>2x</button>
        <button onClick={pictureInPicture}>PiP</button>
        <button onClick={mute}>Mute</button>
      </div>
      <video controls  ref={video} src={videoSrc} onPlay={()=> setPlaying(true)} onPause={()=> setPlaying(false)} ></video>
    </div>
    </>
  );
}

