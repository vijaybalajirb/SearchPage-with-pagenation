 
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    //Values should get from env
    const client_code = import.meta.env.VITE_APP_CLIENT_CODE
    const api_key = import.meta.env.VITE_APP_API_KEY
    const store_id =import.meta.env.VITE_APP_STORE_ID

    console.log(client_code)

    let urlencoded = new URLSearchParams();
    urlencoded.append("per_page", "12");
    urlencoded.append("request[]", "total");
    urlencoded.append("request[]", "results");
    urlencoded.append("request[]", "details");
    urlencoded.append("request[]", "sort_options");
    urlencoded.append("request[]", "filters");
    urlencoded.append("request[]", "sort_options");
    urlencoded.append("identification[client_code]", client_code);
    urlencoded.append("identification[api_key]", api_key);
    urlencoded.append("identification[store_id]", store_id);
    
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

      const fetchData = async (query,page) => {
        const url = `https://api-r1.tagalys.com/v1/search?q=${query}&page=${page}`; 
        try {
          const response = await fetch(url, requestOptions);
          if (!response.ok) {
            throw new Error('Network response was not ok.');
          }
          // Process the response data
          const data = await response.json();
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      export {fetchData}