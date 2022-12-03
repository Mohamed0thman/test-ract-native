import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import postData from '../../data/posts.json';
import jobData from '../../data/jobs.json';

import {Post} from '../../types/post';
import {Job} from '../../types/job';

type InitialState = {
  loading: boolean;
  jops: Job[] | null;
  posts: Post[] | null;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  jops: jobData ? jobData : null,
  posts: postData ? postData : null,
  error: '',
};

const postAndJobSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getAll: (state: InitialState, action: PayloadAction) => {
      state.jops = jobData;
      state.posts = postData;
    },
  },
});
export default postAndJobSlice.reducer;
export const {getAll} = postAndJobSlice.actions;
