import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (build) => ({
    getData: build.query<DATA.GetDataResponse, DATA.GetDataRequest>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
      providesTags: ['todos'],
    }),
    postData: build.mutation<DATA.PostDataResponse, DATA.PostDataRequest>({
      query: ({name, Surname, role, admin}) => ({
        url: '',
        method: 'POST',
        body: {name, Surname, role, admin},
      }),
      invalidatesTags: ['todos']
    }),
    deleteData: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',

      }),
      invalidatesTags: ['todos']
    })
  }),
});

export const {useGetDataQuery, usePostDataMutation, useDeleteDataMutation} = api