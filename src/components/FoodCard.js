import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const likes = (
    <a>
        <Icon name='thumbs up outline' />
        31 Likes
    </a>
)
export default function FoodCard(props)
{
    return(
        <div>
            <Card
                image={props.pic}
                header='Link'
                meta='Predator of Pots'
                description={props.description}
                extra = {likes}
            />
        </div>
    )

}