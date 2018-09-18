import React from 'react'


const TimerItem = ({titles, names}) => 

<div className="level-item has-text-centered">
  <div>
    <p className="title">{titles}</p>
    <p className="heading">{names}</p>
  </div>
</div>


const Timer = ({duration}) =>  

<nav className="level">

  <TimerItem 
    titles={Math.floor(duration.asDays())} 
    names="Days"/>
  
  <TimerItem 
    titles={duration.hours().toString().padStart(2, '0')} 
    names="Hours"/>
  
  <TimerItem 
    titles={duration.minutes().toString().padStart(2, '0')} 
    names="Minutes"/>
  
  <TimerItem 
    titles={duration.seconds().toString().padStart(2, '0')} 
    names="Seconds"/>
  
</nav>


export default Timer

