import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

const ComingSoon = () => {
    const history = useHistory()

    useEffect(() => {
        const tid = setTimeout(() => {
            history.replace('/')
        }, 2000)
        return () => clearTimeout(tid)
    })

    return (
        <h2>Coming Soon</h2>
    );
}

export default ComingSoon;