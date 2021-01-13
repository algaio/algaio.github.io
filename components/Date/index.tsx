import { format, toDate } from "date-fns";

interface DateProps {
  dateString: number | null;
}

export default function Date({ dateString }: DateProps) {
  const dateObject = toDate(dateString!)
  return (
    <time dateTime={String(dateString)}>
      {format(dateObject, "EEEE, do LLLL, yyyy")}
    </time>
  );
}
