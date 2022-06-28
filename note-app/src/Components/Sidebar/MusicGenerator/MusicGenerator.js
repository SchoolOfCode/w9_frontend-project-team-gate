import ReactAudioPlayer from 'react-audio-player';
import Style from "./MusicGenerator.module.css";
import SchoolOfCodeSong from './SchoolOfCodeSong.mp3';

//This is an MP3 player for the Javascript song
export default function MusicGenerator (){
  return (
    <div className={Style.MusicGenerator}>
     
<ReactAudioPlayer
  className={Style.ReactAudioPlayer}
  src={SchoolOfCodeSong}
  autoPlay={false}
  controls={true}
  loop={true}
/>
    </div>
  )
}