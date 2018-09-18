import React from 'react'


const Control = ({disabled, onClick, classes, color, children}) =>
<p className="control">
<button 
    className={'button is-outlined is-rounded is-medium is-' + color} 
    disabled={disabled} 
    onClick={onClick}>
    {children}
</button>
</p>


export default ({paused, onPausedToggle}) => 
<div className="field is-grouped is-grouped-centered">
    <Control disabled={paused} color="danger" onClick={onPausedToggle}>
        Pause
    </Control>
    <Control disabled={!paused} color="success" onClick={onPausedToggle}>
        Resume
    </Control>
   
</div>
