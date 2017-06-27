import React from 'react';

export default function Toolbar(props) {
    return (
        <div className="toolbar">
            <button className="toolbar__button" title="Move" data-action="move">
              <span className="fa fa-arrows"></span>
            </button>

            <ul className="drop-up">
                <li className="drop-up__item">Grayscale</li>
                <li className="drop-up__item">Binarysation</li>
                <li className="drop-up__item">Negative</li>
                <li className="drop-up__item">Negative</li>
            </ul>

            <button className="toolbar__button" title="Move" data-action="move">
                <span className="fa fa-arrows-v"></span>
            </button>

            <button className="toolbar__button" title="Move" data-action="move">
                <span className="fa fa-arrows-h"></span>
            </button>
        </div>
    );
}