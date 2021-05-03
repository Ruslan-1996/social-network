import React from 'react'
import Preloader from "../components/common/Preloader/Preloader";

function WithSuspense <WCP>(Component: React.ComponentType<WCP>) {

    const ComponentHOC = (props: WCP) => {
        return <React.Suspense fallback={<div className={'preloaderSuspense'}>
            <Preloader height={'500px'}
                       width={'500px'} borderWidth={'40px'}/>
        </div>}>
            <Component {...props}/>
        </React.Suspense>
    }

    return ComponentHOC
}

export default WithSuspense;