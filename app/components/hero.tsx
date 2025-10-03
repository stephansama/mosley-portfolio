import { Music, Play } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./fallback";
import { Button } from "./ui/button";

export function Hero() {
	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="relative h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image */}
			<div className="absolute inset-0">
				<ImageWithFallback
					src="https://images.unsplash.com/photo-1572327918315-173bc4545e39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMHR1cm50YWJsZXMlMjBuaWdodGNsdWJ8ZW58MXx8fHwxNzU5NDIyNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
					alt="DJ setup"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
			</div>

			{/* Content */}
			<motion.div
				className="relative z-10 text-center px-4"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.2 }}
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="mb-6"
				>
					<Music className="w-16 h-16 mx-auto text-purple-500" />
				</motion.div>

				<motion.h1
					className="text-white mb-4 tracking-wider"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3 }}
				>
					DJ NEXUS
				</motion.h1>

				<motion.p
					className="text-white/80 max-w-2xl mx-auto mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					Electronic Music Producer & DJ crafting immersive soundscapes that
					move bodies and minds. From deep house to techno, experience the
					journey through sound.
				</motion.p>

				<motion.div
					className="flex flex-col sm:flex-row gap-4 justify-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
				>
					<Button
						size="lg"
						className="bg-purple-600 hover:bg-purple-700"
						onClick={() => scrollToSection("music")}
					>
						<Play className="w-4 h-4 mr-2" />
						Listen Now
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="border-white text-white hover:bg-white/10"
						onClick={() => scrollToSection("shows")}
					>
						View Shows
					</Button>
				</motion.div>
			</motion.div>

			{/* Scroll Indicator */}
			<motion.div
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 1,
					repeat: Infinity,
					repeatType: "reverse",
					duration: 1.5,
				}}
			>
				<div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
					<div className="w-1 h-2 bg-white/50 rounded-full"></div>
				</div>
			</motion.div>
		</div>
	);
}
