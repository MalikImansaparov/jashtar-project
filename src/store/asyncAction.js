import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {base, searchUrl} from "../api/const";

export const asyncSearch = createAsyncThunk(
    'books/fetchMaterial',
    async ({ value }, {rejectWithValue}) => {
        try {
            const response = await axios({
                method: 'post',
                url: base + searchUrl + "/search/",
                data: {
                    "body": `${value}`,
                }
            })
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

