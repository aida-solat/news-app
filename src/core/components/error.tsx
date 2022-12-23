
import * as React from 'react';



function Error(props: any) {
    const { error } = props;
    return (
        < div className="error" >
        < h1 > {error.message} </ h1 >
        < p > {error.stack} </ p > </ div >
    );
}


export default Error;