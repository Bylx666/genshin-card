const http = require('http');
const genshinAPIs = {
  FETCH_ROLE_ID: '/game_record/card/wapi/getGameRecordCard',
  FETCH_ROLE_INDEX: 'https://api-takumi.mihoyo.com/game_record/genshin/api/index'
}

http.createServer((req,res)=>{
  res.writeHead(200, {'Content-Type': 'application/json'})
  get()
}).listen(2333)

const get = (uid) => {
  let getDS = () => {
    // v2.7.0 - from app
    n = '14bmu1mz0yuljprsfgpvjh3ju2ni468r'
    i = Date.now() / 1000 | 0
    r = util.randomStr(6)
    c = md5(`salt=${n}&t=${i}&r=${r}`)  
    return `${i},${r},${c}`
  }
  let headers = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) miHoYoBBS/2.7.0',
    'Referer': 'https://webstatic.mihoyo.com/',
    'Cookie':  "UM_distinctid=17d0338cd3725-0e3c40351c2a3d-4c3e2679-15f900-17d0338cd403b; _ga_PQGG2CR601=GS1.1.1636626314.1.1.1636626375.0; _ga_ZBNHQCY81B=GS1.1.1637235988.1.1.1637235988.0; mi18nLang=zh-cn; _ga_HKTGWLY8PN=GS1.1.1637331944.1.1.1637331995.0; _ga_1JLDNKW30C=GS1.1.1640758169.1.1.1640759029.0; cookie_token=rPYNpVBBy2zmGi6YFUoKK9h1rR1pYZuBPqzVRUDI; account_id=276527759; ltoken=2aVswoobWbrNU3EncjSD7d8nhlVeVDjy8nMKVrwB; ltuid=276527759; _ga_ERMLSZ2QHQ=GS1.1.1641145860.1.0.1641145867.0; login_uid=276527759; login_ticket=C2DlEylBDVUac9W5vIwsRhwOyJr8JAolcr4qHobk; _ga=GA1.2.1888501457.1636626314; _gid=GA1.2.504070454.1641831112; CNZZDATA1275023096=541815888-1636625479-%7C1641823525; _gat=1; _MHYUUID=0cb535a4-d0dc-45e3-8563-1422b645f3ef",
    'x-rpc-app_version': '2.7.0',
    'x-rpc-client_type': 5, // web
    'DS': getDS()
  }
  return new Promise((res,rej)=>{
    http.request({
      host: "https://api-takumi.mihoyo.com",
      path: genshinAPIs.FETCH_ROLE_ID,
      method: "get",
      headers: {
        ...headers
      }
    })
  })
}