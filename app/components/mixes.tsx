import { Download, ExternalLink, Play } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Mixes() {
	const mixes = [
		{
			id: 1,
			title: "Summer Nights Mix 2024",
			date: "Sept 15, 2024",
			duration: "90 min",
			downloads: "5.2K",
			type: "Live Set",
		},
		{
			id: 2,
			title: "Warehouse Sessions Vol. 3",
			date: "Aug 22, 2024",
			duration: "120 min",
			downloads: "8.7K",
			type: "Studio Mix",
		},
		{
			id: 3,
			title: "Festival Warmup Mix",
			date: "July 10, 2024",
			duration: "75 min",
			downloads: "12.1K",
			type: "Live Set",
		},
		{
			id: 4,
			title: "Midnight Drive",
			date: "June 3, 2024",
			duration: "60 min",
			downloads: "6.8K",
			type: "Studio Mix",
		},
	];

	return (
		<section id="mixes" className="py-20 bg-zinc-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-white mb-4">DJ Mixes & Sets</h2>
					<p className="text-white/60 max-w-2xl mx-auto">
						Curated mixes from live performances and studio sessions
					</p>
				</motion.div>

				<div className="space-y-4">
					{mixes.map((mix, index) => (
						<motion.div
							key={mix.id}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Card className="bg-zinc-900 border-zinc-800 hover:border-purple-500/50 transition-colors">
								<div className="p-6">
									<div className="flex flex-col sm:flex-row sm:items-center gap-4">
										<div className="flex-shrink-0">
											<div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
												<Play className="w-8 h-8 text-white ml-1" />
											</div>
										</div>

										<div className="flex-1 min-w-0">
											<div className="flex items-start gap-3 mb-2">
												<h3 className="text-white">{mix.title}</h3>
												<Badge variant="secondary" className="shrink-0">
													{mix.type}
												</Badge>
											</div>
											<div className="flex flex-wrap gap-4 text-white/60">
												<span>{mix.date}</span>
												<span>•</span>
												<span>{mix.duration}</span>
												<span>•</span>
												<span>{mix.downloads} downloads</span>
											</div>
										</div>

										<div className="flex gap-2 sm:flex-shrink-0">
											<Button
												size="sm"
												className="bg-purple-600 hover:bg-purple-700"
											>
												<Play className="w-4 h-4 mr-2" />
												Play
											</Button>
											<Button
												size="sm"
												variant="outline"
												className="border-zinc-700 text-white hover:bg-zinc-800"
											>
												<Download className="w-4 h-4" />
											</Button>
											<Button
												size="sm"
												variant="outline"
												className="border-zinc-700 text-white hover:bg-zinc-800"
											>
												<ExternalLink className="w-4 h-4" />
											</Button>
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
