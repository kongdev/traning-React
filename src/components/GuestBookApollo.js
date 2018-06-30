import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query, Mutation, graphql } from 'react-apollo'

import PostList from './PostList'
import NewPostForm from './NewPostForm';

const postsQuery = gql`
    query listPost {
  posts {
    id
    title
    tags {
      name
    }
    content
  }
}
`

const createPostMutation = gql`mutation createPost($postData : PostData!) {
    post :createPost(data: $postData){
      id
      title
      content
      tags{
        name
      }
    }
  }
`
/*
export default class GuestBookApollo extends Component {
    render() {
        return (
            <Query query={postsQuery}>
                {({ data, loading, error }) => {
                    if (loading) {
                        return <div>loading..</div>
                    }
                    return <PostList posts={data.posts} />
                }}
            </Query>
        )
    }
}*/

class GuestBookApollo extends Component {
    render() {
        //console.log(this.props.data)
        if (this.props.loading) {
            return <div>loading..</div>
        }
        return (
            <React.Fragment>
                <Mutation mutation={createPostMutation}
                    update={(cache, result) => {
                        console.log(result.data.post)

                        const { posts } = cache.readQuery({ query: postsQuery })
                        const newPosts = [...posts, result.data.post]
                        cache.writeQuery({
                            query: postsQuery,
                            data: { posts: newPosts }
                        })
                    }}>
                    {createPostMutation => {
                        return <NewPostForm onCreatePost={({ title, content }) => {
                            const postData = {
                                title, content
                            }
                            const variables = { postData }

                            createPostMutation({
                                variables
                            })
                        }} />
                    }}
                </Mutation>

                <PostList posts={this.props.posts} />
            </React.Fragment>
        )
    }
}

export default graphql(postsQuery, {
    props: (res) => {
        //console.log(res)
        return {
            posts: res.data.posts,
            loading: res.data.loading
        }
    }
})(GuestBookApollo)
