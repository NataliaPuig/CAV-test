export default function ({
  $axios,
  $auth,
  redirect,
  error: nuxtError,
  route,
  $router,
}) {
  $axios.onRequest((config) => {
    console.log("Making request to " + config.url);
    if (config.data instanceof FormData) return config;
    // config.data = Object.entries(config.data || {})
    //   .map(([key, value]) => `${key}=${typeof value === "object" ? JSON.stringify(value) : value}`)
    //   .join("&");
    config.headers["Content-Type"] = "application/json";
    console.log("DATA", config.data);
    return config;
  });

  $axios.onError((error) => {
    if (error.message && error.message.startsWith("timeout of")) {
      return;
    }
    if (error.response && error.response.status === 401) {
      console.log("axios error");
      localStorage.removeItem("user");
      window.location.reload();
      $auth.reset();
      return redirect("/login");

      // console.log(error.response.data);
      // console.log(error.response.status);
      // console.log(error.response.headers);
    }
    if (error.response && error.response.status === 404) {
    }
    // // error.
    // nuxtError({
    //   statusCode: error.response.status,
    //   message: error.message,
    // });

    return Promise.resolve(false);
  });
  $axios.onResponse((response) => {
    console.log(response);

    if (response.data?.error) {
    }
  });
}
