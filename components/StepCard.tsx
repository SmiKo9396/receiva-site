type Props = {
  icon: string;
  title: string;
  body: string;
};

export default function StepCard({ icon, title, body }: Props) {
  return (
    <div className="rounded-2xl border border-navy/10 p-5 shadow-sm hover:shadow-md transition">
      <div className="mb-3">
        <img src={icon} alt="" className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate-600">{body}</p>
    </div>
  );
}