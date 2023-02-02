import React from 'react'

export function getConfigFlag(name: string, defaultValue?: string) {
    if (name === 'shouldShowPage') {
        return true
    }
    return false
}


function ConditionalMock() {
    const shouldShowPage = getConfigFlag('shouldShowPage')

    return (<div>
        <h1>Conditional Mock Configurations</h1>
        {shouldShowPage ? <span>Page is shown</span> : null}
    </div>)
}

export default ConditionalMock