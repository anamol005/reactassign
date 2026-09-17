const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error('Fetch error');
  }

  return await response.json();
};

export default fetchData;
