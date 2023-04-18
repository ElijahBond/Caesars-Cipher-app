import {  Stack, Switch, Typography, Input } from '@mui/material';
import { useState } from 'react';

import './Cypher.styles.scss';

const Cypher = ({ onSetTheme }: any) => {
    const [key, setKey] = useState(null);

    console.log(key)

    return (
        <div className='cypher'>
            <div className='cypher-header'>
                <div className='cypher-name'>Caesars cypher</div>
                <div className='cypher-swith'>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography style={{ color: "red"}} >Light</Typography>
                        <Switch color="warning" defaultChecked onClick={() => onSetTheme()}/>
                        <Typography style={{ color: "red"}}>Dark</Typography>
                    </Stack>
                </div>
            </div>

            <div className='cypher-instruction'>
                <div className='cypher-instruction__title'>
                    How to use:
                </div>
                <div className='cypher-instruction__description'>
                    <p> 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    </p>
                </div>
            </div>
            <div>
            <Input 
                placeholder="Write key here"
                color='secondary'
                style={{ color: "white"}}
                value={key}
                onChange={e => setKey((+e.target.value))} />
            </div>
            <div> button </div>
            <div> cyphered result</div>
        </div>
    )
    
}

export { Cypher }