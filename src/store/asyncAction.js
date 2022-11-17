import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {base, searchUrl} from "../api/const";
import {getSearchSuccess} from "./searchSlice";
import {getCookie} from "react-use-cookie";

const csrfToken = getCookie('csrftoken');
console.log('c', csrfToken)

export const asyncSearch = createAsyncThunk(

    'search/fetchMaterial',
    async (value, {rejectWithValue,dispatch}) => {
        try {
            const response = await axios({
              method: 'post',
              url: base + searchUrl + '/search/',
              data: {
                body: `${value}`,
              },
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'X-CSRFToken': csrfToken,
              },
            });
            console.log(csrfToken)
            dispatch(getSearchSuccess(response.data))
        } catch (error) {
            return rejectWithValue(error.message);
        }

    }
);

