import React from 'react';
import { Wrraper } from './style';
import { PostType } from '@lib/types';
import PostContent from '../PostContent';
import { PostImage, WriteInfo } from '@components/Post';

interface Props {
  post: PostType;
}

const PostContainer = ({ post }: Props) => {
  console.log(post);
  return (
    <Wrraper>
      <WriteInfo nickName={post.User.nickname} date={post.createdAt} />
      <PostContent post={post} />
      <PostImage images={post.Images} />
    </Wrraper>
  );
};

export default PostContainer;