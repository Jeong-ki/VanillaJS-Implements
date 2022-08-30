// const API_END_POINT = 'localhost:8080/';

export const request = async (url, options = {}) => {
  try {
    // const fullUrl = `${API_END_POINT}${url}`;
    const response = await fetch(url, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API 통신 실패');
  } catch (e) {
    alert(e.message);
  }
}