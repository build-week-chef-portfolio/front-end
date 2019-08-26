import React from 'react';
import { Card } from 'semantic-ui-react';


export default function FoodCard(props)
{
    return(
        <div>
            <Card
                image={props.pic}
                header='Link'
                meta='Predator of Pots'
                description={props}
                
            />
        </div>
    )

}