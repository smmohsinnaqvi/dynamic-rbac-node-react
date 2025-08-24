import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "../redux/slices/auth.slice";
import { RootState } from "../redux/store";

// Base fetch with access token injection
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
  credentials: "include",
  prepareHeaders: (headers, { getState, endpoint }) => {
    const state = getState() as RootState;

    if (endpoint !== "login" && endpoint !== "signup") {
      const token = state.auth?.accessToken;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    }

    return headers;
  },
});

// Custom base query with refresh logic
const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If 401, try refreshing token
  if (result?.error?.status === 401) {
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult?.data) {
      // Update auth state
      api.dispatch(setCredentials(refreshResult.data));
      // Retry original request
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

// RTK Query API slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["auth", "conversations", "messages"], // add your tag types here ( to make it refetch on state changes)
  endpoints: () => ({}), // injecting other apis here
});
