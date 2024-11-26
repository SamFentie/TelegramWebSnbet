import React, { useState,useRef } from 'react'
import useSound from 'use-sound';
import './Record.css'
import audio1 from '../../assets/audio/አማኑኤል_ይቅር_ባይ_ነው_(new_ethiopian_orthodox_mezmur_lyrics)(256k).mp3'
import audio2 from '../../assets/audio/ወደ_ቀድሞ_ነገር_እንመለስሊቀ_መዘምራን_ቴዎድሮስ_ዮሴፍ_Wedekedmo_neger_enemeles_Liqe_mezemeran_Tewodros_Yoseph(256k).mp3'
import uparrow from '../../assets/up_arrow.svg'
import downarrow from '../../assets/down_arrow.svg'
import playimg from '../../assets/play.png'
import pauseimg from '../../assets/pause.png'


const Record= () => {
  const [play, { stop }] = useSound(audio1);
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);
  const [accordion,setAccordion]=useState(null)
  const audios = {
   'መዝሙር' :[{ id: 1, title: 'መዝሙር 1', src: audio1},
              { id: 2, title: 'መዝሙር 2', src: audio2 },],
    'ኮርስ' :[{ id: 1, title: 'ኮርስ 1', src: audio1},
              { id: 2, title: 'ኮርስ 2', src: audio2 },],
    'ጉባኤ' :[]
  };
  const playAudio = (src) => {
    if (audioRef.current) {
      // Stop current audio if playing
      if (currentAudio === src && !audioRef.current.paused) {
        audioRef.current.pause();
        setCurrentAudio(null);
      } else {
        setCurrentAudio(src);
        audioRef.current.src = src;
        audioRef.current.play();
      }
    }
  };
  return (
    <div className='event-div'>
        <div className="events">
          <div className='accordion' onClick={()=>setAccordion((prev)=>prev==='መዝሙር'?null:'መዝሙር')}>
            <h3>መዝሙር</h3>
            <img src={accordion==='መዝሙር'?uparrow:downarrow} alt="" />
          </div>
          <div className={`events-list ${accordion==='መዝሙር'?'':'notvisible'}`}>
            {audios['መዝሙር'].map((audio) => (
              <div key={audio.id} className='list-of-audio'>
                <button className='audio' onClick={() => playAudio(audio.src)}>
                  <p>{audio.title}</p>
                  <img src={currentAudio === audio.src ? pauseimg : playimg} alt="" />
                </button>
              </div>
            ))}
            <audio ref={audioRef} />
          </div>




          <div className='accordion' onClick={()=>setAccordion((prev)=>prev==='ኮርስ'?null:'ኮርስ')}>
            <h3>ኮርስ</h3>
            <img src={accordion==='ኮርስ'?uparrow:downarrow} alt="" />
          </div>
          <div className={`events-list ${accordion==='ኮርስ'?'':'notvisible'}`}>
            {audios['ኮርስ'].map((audio) => (
              <div key={audio.id} className='list-of-audio'>
                <button className='audio' onClick={() => playAudio(audio.src)}>
                  <p>{audio.title}</p>
                  <img src={currentAudio === audio.src ? pauseimg : playimg} alt="" />
                </button>
              </div>
            ))}
            <audio ref={audioRef} />
          </div>



          <div className='accordion' onClick={()=>setAccordion((prev)=>prev==='ጉባኤ'?null:'ጉባኤ')}>
            <h3>ጉባኤ</h3>
            <img src={accordion==='ጉባኤ'?uparrow:downarrow} alt="" />
          </div>
          <div className={`events-list ${accordion==='ጉባኤ'?'':'notvisible'}`}>
            {audios['ጉባኤ'].map((audio) => (
              <div key={audio.id} className='list-of-audio'>
                <button className='audio' onClick={() => playAudio(audio.src)}>
                  <p>{audio.title}</p>
                  <img src={currentAudio === audio.src ? pauseimg : playimg} alt="" />
                </button>
              </div>
            ))}
            <audio ref={audioRef} />
          </div>

        </div>
    </div>
  )
}

export default Record