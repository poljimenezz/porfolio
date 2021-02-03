import React from 'react';
import PropTypes from 'prop-types';

const Info = ({infoartista}) => {
    
    if (Object.keys(infoartista).length === 0) return null;

    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Información Artista
            </div>
            <div className="card-body">
                <img src={infoartista.strArtistThumb} alt="Logo Artista" />
                <p className="card-text">Género: {infoartista.strGenre}</p>
                <h2 className="card-text">Biografía:</h2>
                <p className="card-text">{infoartista.strBiographyES}</p>
                <p className="card-text">
                    <a href={`https://${infoartista.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${infoartista.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`${infoartista.strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                </p>
            </div>
        </div>
     );
}

Info.propTypes = {
    infoartista: PropTypes.object.isRequired
  }
 
export default Info;