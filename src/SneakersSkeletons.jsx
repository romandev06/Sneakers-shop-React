import React from 'react'

import ContentLoader from 'react-content-loader'

export default function SneakersSkeletons({props}) {
    return (
        <section>
            <ContentLoader 
                speed={2}
                width={150}
                height={210}
                viewBox="0 0 150 210"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
                {...props}
            >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
            <rect x="0" y="110" rx="3" ry="3" width="150" height="16" /> 
            <rect x="0" y="131" rx="3" ry="3" width="93" height="15" /> 
            <rect x="118" y="171" rx="8" ry="8" width="32" height="32" /> 
            <rect x="0" y="175" rx="8" ry="8" width="80" height="24" />
        </ContentLoader>
        </section>
    )
}
