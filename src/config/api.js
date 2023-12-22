import useStore from "../store";

export const baseUrl = import.meta.env.VITE_APP_BACKEND_URL;

export const token = () => {
  const { auth } = useStore.getState();
  return auth.token;
};
