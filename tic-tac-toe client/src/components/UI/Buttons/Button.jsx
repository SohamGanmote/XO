const Button = ({
	icon,
	children,
	onClick,
	className,
	variant,
	reverse = false,
	type = "button",
	disabled = false,
}) => {
	return (
		<>
			<button
				type={type}
				onClick={onClick}
				disabled={disabled}
				className={`border border-[#504dff] disabled:border-none rounded-[5px] bg-[#5755FE] disabled:bg-[#141414] disabled:cursor-not-allowed px-5 py-[0.5rem] text-[0.9rem] hover:bg-[#514eff] transition text-white disabled:text-[#b9b9b9] inline ${className}`}
			>
				{children}
			</button>
		</>
	);
};
export default Button;
