const env = import.meta.env;

const hostName = env.VITE_REACT_APP_API_URL || window.location.hostname;

export const GlobalVar = {
	API_URL: window.location.protocol + "//" + hostName + ":8000" + "/",
	IMAGE_URL: "",
	IS_DEV: env.DEV,
};
