import React, { useState } from 'react'
import {Block} from 'baseui/block';
import {Button, KIND, SIZE} from 'baseui/button';
import {Card, StyledBody, StyledAction} from 'baseui/card';

const Home = () => {
    return(
        <div>
            <Card
            overrides={{Root: {style: {width: '328px'}}}}
            headerImage={'https://source.unsplash.com/user/erondu/700x400'}
            title="Example card"
            >
                <StyledBody>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
                    faucibus ex, non facilisis nisl.
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
                    faucibus ex, non facilisis nisl.
                    
                </StyledBody>
                <StyledAction>
                    <Button style={{width: '100%'}}>Full Review</Button>
                </StyledAction>
            </Card>
        </div>
    )
}

export default Home;
