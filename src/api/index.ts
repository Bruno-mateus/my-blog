import axios from "axios";
import qs from "qs";

const token = process.env.API_TOKEN;
const apiPosts = process.env.API_GET_POSTS;
const apiPost = process.env.API_GET_POST;
const identifier = process.env.IDENTIFIER;
const password = process.env.PASSWORD;

export async function getPosts() {

const qs = require("qs");
const query = qs.stringify(
  {
    sort: ["id:desc"],
  },
  {
    encodeValuesOnly: true,
  }
);

const response = await axios.get(`${apiPosts}&${query}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

  return response.data.data;
}

export async function getAPost(postId: string | undefined) {
  const response = await axios.get(`${apiPost}/${postId}?populate=*`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
}

export async function getFilteredPost(query?: string) {
  const title = qs.stringify({
    filters: {
      title: {
        $containsi: query,
      },
    },
    encodeValuesOnly: true,
  });

  const response = await axios.get(
    `https://blog-bruno.onrender.com/api/posts?populate=*&${title}`,
    {
      identifier,
      password,
    }
  );

  return response.data.data;
}
