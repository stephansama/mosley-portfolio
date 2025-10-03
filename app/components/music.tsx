import { Heart, Play, Share2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Music() {
	const tracks = [
		{
			id: 1,
			title: "Midnight Pulse",
			genre: "Deep House",
			duration: "6:42",
			plays: "125K",
			color: "from-purple-600 to-pink-600",
		},
		{
			id: 2,
			title: "Neon Dreams",
			genre: "Techno",
			duration: "7:15",
			plays: "89K",
			color: "from-blue-600 to-cyan-600",
		},
		{
			id: 3,
			title: "Ethereal Waves",
			genre: "Progressive House",
			duration: "8:03",
			plays: "156K",
			color: "from-green-600 to-emerald-600",
		},
		{
			id: 4,
			title: "Underground",
			genre: "Minimal Techno",
			duration: "6:28",
			plays: "94K",
			color: "from-orange-600 to-red-600",
		},
		{
			id: 5,
			title: "Cosmic Flow",
			genre: "Melodic Techno",
			duration: "7:50",
			plays: "112K",
			color: "from-indigo-600 to-purple-600",
		},
		{
			id: 6,
			title: "Bassline Theory",
			genre: "Tech House",
			duration: "5:55",
			plays: "78K",
			color: "from-pink-600 to-rose-600",
		},
	];

	return (
		<section id="music" className="py-20 bg-black">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-white mb-4">Original Tracks</h2>
					<p className="text-white/60 max-w-2xl mx-auto">
						Explore my latest releases and original productions
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{tracks.map((track, index) => (
						<motion.div
							key={track.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-purple-500/50 transition-colors group">
								<div
									className={`h-48 bg-gradient-to-br ${track.color} relative`}
								>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
										<Button
											size="lg"
											className="rounded-full w-16 h-16 bg-white/90 hover:bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity"
										>
											<Play className="w-6 h-6 ml-1" />
										</Button>
									</div>
									<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
										<span className="text-white">{track.duration}</span>
									</div>
								</div>
								<div className="p-6">
									<h3 className="text-white mb-2">{track.title}</h3>
									<p className="text-white/60 mb-4">{track.genre}</p>
									<div className="flex items-center justify-between">
										<span className="text-white/40">{track.plays} plays</span>
										<div className="flex gap-2">
											<button className="text-white/60 hover:text-purple-500 transition-colors">
												<Heart className="w-5 h-5" />
											</button>
											<button className="text-white/60 hover:text-purple-500 transition-colors">
												<Share2 className="w-5 h-5" />
											</button>
										</div>
									</div>
								</div>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
