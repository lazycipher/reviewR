import React, { useState } from 'react'
import {Block} from 'baseui/block';
import {Button, KIND, SIZE} from 'baseui/button';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import './Style.css';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import ReviewList from './ReviewList';

const Home = (props) => {
    return(
        <div className="container">
            <FlexGrid
                flexGridColumnCount={4}
                flexGridColumnGap="scale800"
                flexGridRowGap="scale800"
            >
                <ReviewList />
            </FlexGrid>
        </div>
    )
}

export default Home;
