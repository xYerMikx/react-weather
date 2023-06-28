enum Days {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

export function getDate(dt: string, timezone: string) {
  const utcMs = Number(dt) * 1000 + Number(timezone) * 10;
  const localDate = new Date(utcMs);
  const hours = localDate.getHours();
  const minutes = localDate.getMinutes();
  const day = localDate.getUTCDay();
  return [`${hours}:${minutes}`, `${Days[day]}`];
}
