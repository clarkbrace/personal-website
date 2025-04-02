"use client";

interface MainNavHeaderProps {
  label: string;
  children?: React.ReactNode;
}

export default function RootNavigationCard({ label, children }: MainNavHeaderProps) {
  return (
    <div className="relative">
      <h1 className=" font-overpassMono text-3xl px-2 pt-1 rounded-lg bg-gray-100 text-BodyBlue text-center border-2">
        {label}
        <div>{children}</div>
      </h1>
    </div>
  );
}
