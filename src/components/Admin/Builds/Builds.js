import React, {Component} from 'react'

import ChmapionCards from '../../Guides/index'

export default class Builds extends Component{
    render(){
        return(
            <div className="aBuilds">
                <ChmapionCards admin={{path:'/admin/builds'}}/>
            </div>
        )
    }
}