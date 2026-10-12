/* /api/counter — 浏览器只请求本站，由服务端转发 Supabase，
   绕开国内网络对 *.supabase.co 的阻断。
   GET            → { visits, clicks }
   POST {id}      → 递增 visits | sticker_clicks，返回 { id, value } */
var SB_URL = process.env.SB_URL || 'https://gvjjkioroiuxkbsithrn.supabase.co';
var SB_ANON = process.env.SB_ANON || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2ampraW9yb2l1eGtic2l0aHJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwNjAzNzUsImV4cCI6MjA5ODYzNjM3NX0.R6DlKrICXcX5aV51KcvUxH5bZJF2oJr7nmwa6GkVuSI';

function headers() {
  return { apikey: SB_ANON, Authorization: 'Bearer ' + SB_ANON, 'Content-Type': 'application/json' };
}

module.exports = async function (req, res) {
  res.setHeader('Cache-Control', 'no-store');
  try {
    if (req.method === 'GET') {
      var r = await fetch(SB_URL + '/rest/v1/counters?select=id,value', { headers: headers() });
      if (!r.ok) throw new Error('read failed: ' + r.status);
      var rows = await r.json();
      var out = { visits: null, clicks: 0 };
      rows.forEach(function (row) {
        if (row.id === 'visits') out.visits = +row.value;
        if (row.id === 'sticker_clicks') out.clicks = +row.value;
      });
      return res.status(200).json(out);
    }
    if (req.method === 'POST') {
      var id = req.body && (req.body.id || req.body.counter_id);
      if (id !== 'visits' && id !== 'sticker_clicks') return res.status(400).json({ error: 'bad id' });
      var r2 = await fetch(SB_URL + '/rest/v1/rpc/increment_counter', {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({ counter_id: id })
      });
      if (!r2.ok) throw new Error('increment failed: ' + r2.status);
      var v = await r2.json();
      return res.status(200).json({ id: id, value: +v });
    }
    return res.status(405).json({ error: 'method not allowed' });
  } catch (e) {
    return res.status(502).json({ error: String((e && e.message) || e) });
  }
};
