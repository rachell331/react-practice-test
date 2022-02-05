import React from 'react';

const Modal = ( { movie , onClose , setIsActive }) => {
    const { movieNm, thumbUrl, director } = movie 
    return (
        <div className="modal">
            <div className="bg"></div>
            <div className="popup">
                <h3>{movieNm} </h3>    
                <div>
                    <img src={thumbUrl} alt={movieNm} />
                </div>
                <strong>감독: {director} </strong>
                {/* <p className="more" onClick={ onClose }> X </p> */}
                <p className="more" onClick={ ()  => setIsActive(false) }> X </p>
            </div>
        </div>
    );
};

export default Modal;