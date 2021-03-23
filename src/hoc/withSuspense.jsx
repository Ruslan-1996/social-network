import React from 'react'
import Preloader from "../components/common/Preloader/Preloader";

const WithSuspense = (Component) => {

    const ComponentHOC = (props) => {
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