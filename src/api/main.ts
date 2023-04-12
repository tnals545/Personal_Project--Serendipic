import instance from "@/api/core";

export const getImgInfo = async (keyword = "nature") => {
  return await instance({
    url: "background-image",
    params: { query: keyword },
  });
};
