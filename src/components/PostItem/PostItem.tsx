import React from 'react';

import {Post} from '@domain';

import {Box, ProfileUser} from '@components';

import {PostActions} from './components/PostActions';
import {PostBottom} from './components/PostBottom';
import {PostImage} from './components/PostImage';

interface Props {
  post: Post;
  hideCommentAction?: boolean;
}
export function PostItem({post, hideCommentAction}: Props) {
  return (
    <Box mb="s24" paddingHorizontal="s24">
      <ProfileUser
        user={{
          id: post.author.id,
          username: post.author.userName,
          profileURL: post.author.profileURL,
        }}
      />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        hideCommentAction={hideCommentAction}
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        hideCommentAction={hideCommentAction}
        author={post.author}
        text={post.text}
        commentCount={post.commentCount}
        id={post.id}
      />
    </Box>
  );
}
