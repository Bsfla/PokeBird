import React, { useState } from 'react';
import { Wrraper } from './style';
import { PostType } from '@lib/types';
import PostButtonGroup from './PostButtonGroup';
import PostContainer from './PostContainer';
import PostEditForm from '../PostForm/PostEditForm';
import Link from 'next/link';
import { POST_PAGE } from '@consts/route';

interface Props {
  post: PostType;
}

const PostCard = ({ post }: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleToggleEdit = (
    e: React.MouseEvent<HTMLSpanElement, globalThis.MouseEvent>
  ) => {
    e.stopPropagation();

    setIsEdit(!isEdit);
  };

  if (isEdit) {
    return (
      <PostEditForm
        post={post}
        handleToggleEdit={handleToggleEdit}
        setIsEdit={setIsEdit}
      />
    );
  }

  return (
    <Link href={`${POST_PAGE}/${post.id}`}>
      <Wrraper>
        <PostContainer post={post} />
        <PostButtonGroup post={post} handleToggleEdit={handleToggleEdit} />
      </Wrraper>
    </Link>
  );
};

export default PostCard;
