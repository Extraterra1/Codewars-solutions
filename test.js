const fn = async () => {
  const res = await fetch('https://gdp.sicee-api.net/api/Search/SearchCNEPointsByCid', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      Referer: 'https://resultadospresidencialesvenezuela2024.com/',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
    },
    body: JSON.stringify({ cid: `V${26527144}` })
  });

  console.log(res.status);
  console.log(res.body);
};

fn();
