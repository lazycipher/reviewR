import React, { useState } from 'react'
import './Style.css';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';
import {Card, StyledBody, StyledAction} from 'baseui/card';
import {Button} from 'baseui/button';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';
import {Spinner} from 'baseui/spinner';

const POSTS_PER_PAGE = 8;

const itemProps = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

const Home = ({ data: { loading, error, reviews, _allPostsMeta }, loadMorePosts }) => {
    if (error) return <h1>Error fetching posts!</h1>
    if (!loading) {
    //   const areMorePosts = reviews.length < _allPostsMeta.count
      return (
        <section className="container">
            <FlexGrid
                flexGridColumnCount={4}
                flexGridColumnGap="scale800"
                flexGridRowGap="scale800"
            >
            {reviews.edges.map(review => (
            //   <li className='Home-li' >
                <FlexGridItem {...itemProps} key={`review-${review.node.id}`}>
                  <Card
                    overrides={{Root: {style: {width: '328px'}}}}
                    headerImage={`https://media.graphcms.com/${review.node.image.handle}`}
                    title={review.node.title}
                >
                    <StyledBody>
                    {review.node.description.length<170?review.node.description: review.node.description.slice(0, 170) + "..."}
                    </StyledBody>
                    <StyledAction>
                    <Button href={`/review/${review.node.id}`}
                        overrides={
                            {
                                BaseButton: {
                                    props: {
                                        $as: 'a',
                                    },
                                },
                            }
                        }
                        style={{width: '50%'}}>Full Review</Button>
                    </StyledAction>
                </Card>
            </FlexGridItem>
            //   </li>
            ))}
           </FlexGrid>
          {/* <div className='Home-showMoreWrapper'>
            {areMorePosts
              ? <button className='Home-button' onClick={() => loadMorePosts()}>
                {loading ? 'Loading...' : 'Show More Posts'}
              </button>
              : ''}
          </div> */}
        </section>
      )
    }
    return <div id="loader"><Spinner /></div>
  }

export const allPosts = gql`
query content($first: Int, $skip: Int, $where: ReviewWhereInput, $orderBy: ReviewOrderByInput) {
    reviews: reviewsConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
      edges {
        node {
          createdAt
          id
          title
          description
          image {
            handle
          }
          author
          views
          likes
        }
      }
    }
  }
`

export const allPostsQueryVars = {
    skip: 0,
    first: POSTS_PER_PAGE
  }
  
  export default graphql(allPosts, {
    options: {
      variables: allPostsQueryVars
    },
    props: ({ data }) => ({
      data,
      loadMorePosts: () => {
        return data.fetchMore({
          variables: {
            skip: data.reviews.length
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult
            }
            return Object.assign({}, previousResult, {
              allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
            })
          }
        })
      }
    })
  })(Home)

// export default Home;
