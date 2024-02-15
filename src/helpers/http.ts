// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function http(uri: string, options: any) {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  return fetch(`${apiBaseUrl}${uri || ""}`, options);
}

export const getUserByToken = (token: string) => {
  const apiCallOptions = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
  };
  return http("/auth/login", apiCallOptions)
    .then((jsonUser) => jsonUser.json())
    .then((user) => {
      if (user) {
        return user;
      }
      return null;
    })
    .catch((error) => {
      console.error("Failed to fetch user information:", error);
    });
};
