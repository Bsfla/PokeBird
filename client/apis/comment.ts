import api from '@apis/base';
import { CommentFormType, CommentType } from '@lib/types';
import { AiFillPushpin } from 'react-icons/ai';

export const getComments = async (postId: number): Promise<CommentType[]> => {
  const response = await api.get({
    url: `/comment/${postId}`,
  });

  return response.data;
};

export const createComment = (body: CommentFormType) => {
  const { postId, content } = body;

  return api.post({
    url: `/comment/${postId}`,
    data: { content },
  });
};

export const editComment = (body: CommentFormType) => {
  const { postId: commentId, content } = body;

  return api.patch({
    url: `/comment/${commentId}`,
    data: { content },
  });
};

export const deleteComment = (commentId: number) => {
  return api.delete({
    url: `/comment/${commentId}`,
  });
};

export const replyComment = (body: CommentFormType) => {
  const { postId: commentId, content } = body;

  return api.post({
    url: `/comment/${commentId}/reply`,
    data: { content },
  });
};
