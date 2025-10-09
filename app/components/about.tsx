import { motion } from "motion/react";
import { ImageWithFallback } from "./fallback";

export function About() {
	return (
		<section id="about" className="py-20 bg-zinc-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="text-white mb-6">About The Artist</h2>
						<div className="space-y-4 text-white/70">
							<p>
								With over a decade of experience in electronic music production
								and DJing, KVNCPT has become a staple in the underground
								scene, known for seamlessly blending genres and creating
								unforgettable experiences on the dance floor.
							</p>
							<p>
								Starting in small basement clubs and evolving to headline
								international festivals, the journey has been driven by a
								passion for pushing boundaries and exploring the depths of
								electronic sound.
							</p>
							<p>
								As a producer, the focus is on crafting tracks that tell
								stories, combining intricate sound design with powerful
								basslines and hypnotic melodies that resonate long after the
								music stops.
							</p>
						</div>

						<div className="grid grid-cols-3 gap-6 mt-8">
							<div>
								<div className="text-purple-500 mb-1">500+</div>
								<div className="text-white/60">Shows Played</div>
							</div>
							<div>
								<div className="text-purple-500 mb-1">50+</div>
								<div className="text-white/60">Tracks Released</div>
							</div>
							<div>
								<div className="text-purple-500 mb-1">10+</div>
								<div className="text-white/60">Years Experience</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="relative"
					>
						<div className="aspect-square rounded-lg overflow-hidden">
							<ImageWithFallback
								src="https://images.unsplash.com/photo-1582024959432-aee9b60ff4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwc3R1ZGlvfGVufDF8fHx8MTc1OTQ2NjQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
								alt="Music production studio"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600/20 rounded-lg -z-10"></div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
