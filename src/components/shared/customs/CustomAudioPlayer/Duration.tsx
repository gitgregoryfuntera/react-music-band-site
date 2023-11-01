interface DurationProps {
  seconds: number;
}

export const format = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());
  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }
  return `${mm}:${ss}`;
};

export const pad = (value: number) => {
  return ("0" + value).slice(-2);
};

const Duration = (props: DurationProps) => {
  const { seconds } = props;
  return <time dateTime={`P${Math.round(seconds)}S`}>{format(seconds)}</time>;
};

export default Duration;
