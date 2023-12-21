import { useEffect, useRef, useState } from "react";
import videoSrc from "../assets/video.mp4"
import { useLocalStorage } from "../components/useLocalStorage";

export function CustomHook() {
  const video = useRef<HTMLVideoElement>(null)
  const [volume,setVolume] = useLocalStorage('volume', '0')

useEffect(()=>{
  if(!video.current) return
  const n = Number(volume);
  if (n >= 0 && n<=1)video.current.volume = n;
}, [volume])

  return ( 
    <>
    <div>
      <div className="flex">
        <button onClick={()=> setVolume("0")}>0</button>
        <button onClick={()=> setVolume("0.5")}>50</button>
        <button onClick={()=> setVolume("1")}>100</button>
      </div>
      <video controls  ref={video} src={videoSrc}></video>
    </div>
    </>
  );
}

