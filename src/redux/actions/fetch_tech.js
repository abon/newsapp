export function fetchTech() {
  //return the actual action to do
  return function (dispatch) {
    fetch(
      "https://newsapi.org/v2/top-headlines?" +
        "country=us&" +
        "apiKey=ee3c0c4aa66a4748bd6d2c160da9fc73"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: "FETCH_TECH", payload: res.articles });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

//
