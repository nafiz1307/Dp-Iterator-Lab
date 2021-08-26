import unfetch from "unfetch";

export default async function loadJSON(url: string) {
  const fetch = unfetch;
  const response = await fetch(url);
  return response.json();
}
const MY_APP_ID = "9b19cf7d5fa4de549bdf397ca6a6d0ba";

describe(".open weather map api", () => {
  test("correct url should response with correct json response", async () => {
    const response = await loadJSON(
      `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${MY_APP_ID}`
    );
    expect(response.name).toEqual("Dhaka");
  });
});