import React, {useEffect} from 'react';
import { useRouteMatch, useHistory, useParams } from 'react-router-dom';

const Report = () => {
    const matchUC = useRouteMatch({
        path: '/REPORT*',
        strict: true,
        sensitive: true
    });
    const matchAdvanced = useRouteMatch([
        '/report/advanced',
        '/report/*/advanced'
    ]);
    const matchAll = useRouteMatch('/report/all');
    const { date } = useParams();
    const history = useHistory();


    useEffect(() => {
        console.log('history location state', history.location.state)
        if (matchUC)
            history.replace(
                history.location.pathname.toLowerCase(), 
                {redirected: true}
            );
    }, [matchUC, history])

    if (matchUC)
        return ""

    if (!date) return (
        <p>Select Report
            <br/><button onClick={() =>
                history.push('/report/last-week')
            }>Last Week</button>
            <br/><button onClick={() =>
                history.push('/report/last-month')
            }>Last Month</button>
            <br/><button onClick={() =>
                history.push('/report/all')
            }>View All</button>
        </p>
    );

    if (date === 'advanced') return (
        <p>Select Report
            <br/><button onClick={() =>
                history.push('/report/last-week/'+date)
            }>Last Week</button>
            <br/><button onClick={() =>
                history.push('/report/last-month/'+date)
            }>Last Month</button>
            <br/><button onClick={() =>
                history.push('/report/all/'+date)
            }>View All</button>
        </p>
    );

    if (matchAll) return (
        <>
            <h2>Complete Report of Everything</h2>
            {matchAdvanced && <p>... Alternate Advanced Controls ...</p>}
        </>
    )

    return (
        <>
            <h2>Report For {date}</h2>
            {matchAdvanced && <p>... Advanced Controls ...</p>}
        </>
    );
};

export default Report;