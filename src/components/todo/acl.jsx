import React, {useContext} from 'react';
import {AuthContext} from '../../context/auth'
import If from './if';

const Acl = props => {
    const context = useContext(AuthContext)

    let okToRender = false;

    try {
        okToRender = context.loggedIn && props.capability ? context.user.capabilities.includes(props.capability) : false;
    } catch (error) {
        console.error('not Authorized', error.message)
    }

    return (
        <If condition={okToRender}>
            {props.children}
        </If>
    )
}

export default Acl;