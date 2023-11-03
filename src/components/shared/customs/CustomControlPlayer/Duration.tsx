import { format } from "./utils";

interface DurationProps {
  seconds: number;
}

const Duration = (props: DurationProps) => {
  const { seconds } = props;
  return <time dateTime={`P${Math.round(seconds)}S`}>{format(seconds)}</time>;
};

export default Duration;
