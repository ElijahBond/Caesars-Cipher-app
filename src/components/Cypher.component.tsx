import {  Stack, Switch, Typography, Input, Button } from '@mui/material';
import { useState } from 'react';

import { cypher } from './cypher';

import './Cypher.styles.scss';

const Cypher = ({ onSetTheme }: any)  => {
    const [key, setKey] = useState<string | number>('');
    const [plainWord, setPlainWord] = useState<string>('');
    const [cypheredWord, setCypheredWord] = useState<string>('');

    const onButtonHandler = () => {
        let res = '';

        if (typeof key === 'number') {
            res = cypher(plainWord, key);
        }
        setCypheredWord(res);
    }

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
                    In the Caesars cypher, each letter of a word or sentence 
                    is replaced bu a letter shifted by the value of the key. For example,
                    with key = 3, 'a' replacind to 'd', 'e' to 'h' and so on.
                    <br />
                    This app can do it, enjoy)
                    </p>
                </div>
            </div>

            <div>
                <h4>1.Write your key (number from 1 to 25)</h4>
                <Input 
                    type='number'
                    placeholder="Write key here"
                    color='secondary'
                    style={{ color: "red"}}
                    value={key}  
                    onChange={e => setKey((+e.target.value))} />
            </div>

            <div>
                <h4>2.Write word which need cyphering <br />(only letter IN LOWER CASE and spaces)</h4>
                <Input 
                    type='text'
                    placeholder="Write word or sentence"
                    color='secondary'
                    style={{ color: "red"}}
                    value={plainWord}
                    onChange={e => setPlainWord((e.target.value))} />
            </div>
            <div>
                <h4>3.Click on button to see you ciphered word</h4>
                <Button 
                    variant="contained" 
                    color="secondary"
                    onClick={() => onButtonHandler()}
                >
                    Cypher!
                </Button>

                {cypheredWord && (
                    <>
                        <h4>Your cyphered word/sentence:</h4>
                        <h4>{cypheredWord}</h4>
                    </>
                )}
            </div>
        </div>
    )
    
}

export { Cypher };