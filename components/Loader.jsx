import { Html, useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";

function CanvasLoader() {
	const { progress } = useProgress();

	return (
		<Html
			as="div"
			center
			className=" flex justify-center items-center w-full h-full flex-col z-30"
		>
			<span className="canvas-loader z-30 text-white"></span>
			<p className="text-[14px] text-white font-bold mt-10 z-30">
				{progress.toFixed(2)}%
			</p>
		</Html>
	);
}

export function PreLoader() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const updateProgress = () => {
			for (let i = 0; i <= 100; i++) {
				setTimeout(() => {
					setProgress(i);
				}, 30 * i);
			}
		};

		updateProgress();
	}, []);

	return (
		<div className="w-[100svw] h-[100svh] overflow-hidden bg-bgPrimaryLight dark:bg-bgPrimaryDark z-40 fixed top-0 left-0 flex flex-col justify-center items-center gap-8">
			<div className="font-mono text-left w-[350px]">
				<h1 className="text-center text-2xl font-bold mb-6">
					🤖 FAIRY AI ASSISTANT
				</h1>

				<p>{progress > 10 ? "[OK]" : "[..]"} Initializing Core</p>
				<p>{progress > 35 ? "[OK]" : "[..]"} Loading Experience Data</p>
				<p>{progress > 70 ? "[OK]" : "[..]"} Loading Projects</p>
				<p>{progress > 90 ? "[OK]" : "[..]"} Starting Interface</p>

				<div className="mt-6">
					<div className="w-full bg-black h-4 rounded-full overflow-hidden">
						<div
							className="h-full bg-green-500 rounded-full transition-[width] duration-100"
							style={{ width: `${progress}%` }}
						/>
					</div>

					<p className="mt-2 text-center">
					{progress}%
					</p>
				</div>
			</div>
		</div>
	);
}

export default CanvasLoader;
