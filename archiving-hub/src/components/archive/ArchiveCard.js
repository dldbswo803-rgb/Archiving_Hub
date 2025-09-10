import React from 'react';

const ArchiveCard = ({ title, description, thumbnail }) => {
    return (
        <div className="archive-card">
            <img src={thumbnail} alt={title} className="archive-thumbnail" />
            <h3 className="archive-title">{title}</h3>
            <p className="archive-description">{description}</p>
        </div>
    );
};

export default ArchiveCard;