import React, { useEffect, useState } from 'react';
import { Card, Icon } from 'semantic-ui-react';
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
            {posts.map(post => (
                <div>
                    <Card>
                        <h3>{post.chef_name}</h3>
                        <p>{post.recipe_title}</p>
                        <p>{post.chef_location}</p>
                        <p>{post.item_ingredients}</p>
                    </Card>
                </div>
            ))
            }
        </div>
    )
}