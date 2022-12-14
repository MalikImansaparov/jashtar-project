import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {base, searchUrl} from "../api/const";
import {getSearchSuccess} from "./searchSlice";
import { getCookie } from 'react-use-cookie';

const csrfToken = getCookie('csrftoken');

export const asyncSearch = createAsyncThunk(
  'search/fetchMaterial',
  async ({ val, val2 }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios({
        method: 'post',
        url: base + searchUrl + '/search/',
        data: {
          body: `${val}`,
          bdy: `${val2}`,
        },
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
      });
      dispatch(getSearchSuccess(response.data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

