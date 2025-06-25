export default async function handler(req, res) {
  const response = await fetch('https://www.strava.com/api/v3/athlete/activities', {
    headers: {
      Authorization: `Bearer ${process.env.STRAVA_ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    return res.status(500).json({ message: 'Erro ao buscar atividades do Strava' });
  }

  const activities = await response.json();
  res.status(200).json(activities);
}
cria rota api strava
