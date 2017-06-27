import React from 'react'
import './Toolbar.css'

export default function Toolbar ({
    onGreyScale,
    onInvertColors,
    onUndo,
    onRedo,
    onFlipVertical,
    onFlipHorizontal,
    onNoise,
    onBrightness,
    onSepia,
    onSaturate
}) {
    return <div className="toolbar">
        <button className="toolbar__button" title="Effects">
            <span className="fa fa-magic"/>
        </button>

        <ul className="drop-up">
            <li className="drop-up__item" onMouseDown={onSaturate}>Saturate</li>
            <li className="drop-up__item" onMouseDown={onGreyScale}>Greyscale</li>
            <li className="drop-up__item" onMouseDown={onSepia}>Sepia</li>
            <li className="drop-up__item" onMouseDown={onInvertColors}>Invert colors</li>
            <li className="drop-up__item" onMouseDown={onNoise}>Noise</li>
            <li className="drop-up__item" onMouseDown={onBrightness}>Brightness</li>
        </ul>

        <button className="toolbar__button" title="Undo" onClick={onUndo}>
            <span className="fa fa-undo"/>
        </button>

        <button className="toolbar__button" title="Redo" onClick={onRedo}>
            <span className="fa fa-repeat"/>
        </button>

        <button className="toolbar__button" title="Flip vertical" onClick={onFlipVertical}>
            <span className="fa fa-arrows-v"/>
        </button>

        <button className="toolbar__button" title="Flip horizontal" onClick={onFlipHorizontal}>
            <span className="fa fa-arrows-h"/>
        </button>
    </div>
}
