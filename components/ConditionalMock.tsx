import React from 'react'

export function getConfigFlag(name: string, defaultValue?: string) {
    switch(name) {
        case 'shouldShowPage': 
            return Math.random() > 0.5 ? true : false           
        case 'userName':
            return Math.random() > 0.5 ? 'John' : 'Jane'           
        default:
            return null
    }
}

function ConditionalMock() {
    const shouldShowPage = getConfigFlag('shouldShowPage')
    const userName = getConfigFlag('userName')

    return (<div>
        <h1>Unpredictable Configurations</h1>
        {shouldShowPage ? <span>Page is shown by {userName}</span> : null}
    </div>)
}

export default ConditionalMock