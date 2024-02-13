export const ENDPOINT = "http://localhost:5173";

export const myApiFetch = async (
  input: RequestInfo,
  init?: RequestInit
): Promise<Response> => {
  const response = await fetch(`${ENDPOINT}${input}`, init);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};
