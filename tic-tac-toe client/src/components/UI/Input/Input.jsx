import { Lock, Unlock } from "lucide-react";
import { useState } from "react";

const Input = ({
	label,
	type,
	placeholder = "Enter Text",
	error,
	onChange,
	value,
	divClass,
	labelClass,
	inputClass,
	required = false,
	disabled = false,
	maxLength = 6,
}) => {
	return (
		<div className={`flex flex-col ${divClass}`}>
			<label className={`text-left text-[1rem] mb-2 ${labelClass}`}>
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				className={`border border-gray-500 rounded-[5px] bg-[#1a1919] px-5 py-[0.8rem] text-[0.9rem] focus:outline-none focus:border-gray-400  ${inputClass}`}
				onChange={onChange}
				value={value}
				required
				maxLength={maxLength}
				disabled={disabled}
			/>
			{error && (
				<p className="text-left text-[0.7rem] mt-2 text-red-600">{error}</p>
			)}
		</div>
	);
};
export default Input;
