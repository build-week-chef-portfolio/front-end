// import React from 'react';
// import { Card, Icon } from 'semantic-ui-react';

// const likes = (
//     <a>
//         <Icon name='thumbs up outline' />
//         31 Likes
//     </a>
// )
// export default function FoodCard(props)
// {
//     return(
//         <div>
//             <Card
//                 image={props.pic}
//                 header='Link'
//                 meta='Predator of Pots'
//                 description={props.description}
//                 extra = {likes}
//             />
//         </div>
//     )

// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Portfolio() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get('https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts', { headers: { Authorization: localStorage.token } })
            .then(response => {
                console.log("posts", response.data);
                setPosts(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h1>View Chef Posts</h1>
        </div>
    )
}