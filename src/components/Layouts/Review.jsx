import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Markdown from 'react-markdown'
import {Spinner} from 'baseui/spinner';
import './Style.css';

const Review = ({ data: { loading, error, review } }) => {
    if (error) return <h1>Error fetching the post!</h1>
    if (!loading) {
        if(review.image.handle==null){
            review.image.handle = "4tVqSH89QNSIDiaUhgl3"
        }
        return (
        <article>
            <h1>{review.title}</h1>
            <div className='Post-placeholder'>
            <img
                alt={review.title}
                src={`https://media.graphcms.com/resize=w:650,h:366,fit:crop/${review.image.handle}`}
            />
            </div>
            <Markdown
            source={review.description}
            escapeHtml={false}
            />
        </article>
        )
    }
    return <h2><div id="loader"><Spinner /></div></h2>
    }

export const singlePost = gql`
    query content($id: ID!) {
        review(where: {id: $id}) {
        id
        title
        description
        createdAt
        author
        views
        likes
        authorEmail
        image {
            handle
        }
        }
    }
`

export default graphql(singlePost, {
  options: ({ match }) => ({
    variables: {
      id: match.params.id
    }
  })
})(Review)
