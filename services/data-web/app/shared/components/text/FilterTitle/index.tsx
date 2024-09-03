interface FilterTitleProps {
  title: string
}

export default function FilterTitle({ title }: FilterTitleProps) {
  return <h4 className="text-base font-bold text-[#1F2937]">{title}</h4>
}