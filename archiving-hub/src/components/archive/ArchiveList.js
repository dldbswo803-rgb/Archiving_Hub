import React from 'react';
import ArchiveCard from './ArchiveCard';

const ArchiveList = ({ archives }) => {
    return (
        <div className="archive-list">
            {archives.map((archive) => (
                <ArchiveCard key={archive.id} archive={archive} />
            ))}
        </div>
    );
};

export default ArchiveList;