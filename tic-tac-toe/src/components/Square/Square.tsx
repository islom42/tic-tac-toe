type Props = {
  index: number;
  onClick(e: any): void;
  player?: string;
}

export const Square = ({index, onClick, player}: Props) => {
  const scale = player ? "scale-100" : "scale-0";
  const textColor = player === "X" ? "text-yellow-200" : "text-stone-200";
  const hoverStyle = "transition duration-500 hover:scale-105  transform";
  return (
    <div
      data-cell-index={index}
      className={`h-36 border-solid border-4 border-slate-200  font-display text-7xl text-center flex justify-center items-center cursor-pointer rounded-xl ${hoverStyle}`}
      {...{ onClick }}
    >
      <span className={`transform transition-all duration-150 ease-out ${scale} ${textColor}`}>{player}</span>
    </div>
  )
}

export default Square