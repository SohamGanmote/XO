const Button = ({
	icon,
	children,
	onClick,
	className,
	variant,
	reverse = false,
	type = "button",
}) => {
	return (
		<>
			<button
				type={type}
				onClick={onClick}
				className={`border border-[#504dff] rounded-[5px] bg-[#5755FE] px-5 py-[0.5rem] text-[0.9rem] hover:bg-[#514eff] transition text-white inline ${className}`}
			>
				{children}
			</button>
		</>
	);
};
export default Button;
