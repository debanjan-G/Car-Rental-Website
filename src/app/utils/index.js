export async function fetchCars(manufacturer) {
  // const { manufacturer, year, model, limit, fuel } = filters;

  // Set the required headers for the API request
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  // Set the required headers for the API request
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}`,
    {
      headers: headers,
    }
  );

  // Parse the response as JSON
  const result = await response.json();

  return result;
}
