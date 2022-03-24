const parseFetch = async (data) => {
  return await JSON.parse(JSON.stringify(data));
}

export default parseFetch;