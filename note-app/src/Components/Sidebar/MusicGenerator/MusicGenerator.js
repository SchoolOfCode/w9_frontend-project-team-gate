import ReactAudioPlayer from 'react-audio-player';
import SchoolOfCodeSong from './SchoolOfCodeSong.mp3';

export default function MusicGenerator (){
  return (
    <div>
     
<ReactAudioPlayer
  src={SchoolOfCodeSong}
  autoPlay={false}
  controls={true}
  loop={true}
/>
    </div>
  )
}