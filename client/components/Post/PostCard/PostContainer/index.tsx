import React from 'react';
import { PostHeader, SharePostBlock, Wrraper } from './style';
import { PostType } from '@lib/types';
import PostContent from '../PostContent';
import { PostImage, WriteInfo } from '@components/Post';

interface Props {
  post: PostType;
}

const PostContainer = ({ post }: Props) => {
  if (post.RetweetId && post.Retweet) {
    const { Retweet: sharePost, User: user } = post;

    return (
      <Wrraper>
        <WriteInfo nickName={user.nickname} date={post.createdAt} />
        <SharePostBlock>
          <PostContainer post={sharePost} />
        </SharePostBlock>
      </Wrraper>
    );
  }

  return (
    <Wrraper>
      <PostHeader>
        <WriteInfo nickName={post.User.nickname} date={post.createdAt} />
      </PostHeader>
      <PostContent post={post} />
      <PostImage images={post.Images} />
    </Wrraper>
  );
};

export default PostContainer;
