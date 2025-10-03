import { MapPin, Ticket } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Shows() {
	const shows = [
		{
			id: 1,
			date: "Oct 18, 2024",
			venue: "Electric Dreams",
			location: "Berlin, Germany",
			status: "Tickets Available",
			type: "Headliner",
		},
		{
			id: 2,
			date: "Oct 25, 2024",
			venue: "Underground Festival",
			location: "Amsterdam, Netherlands",
			status: "Almost Sold Out",
			type: "Festival",
		},
		{
			id: 3,
			date: "Nov 2, 2024",
			venue: "Club Warehouse",
			location: "London, UK",
			status: "Tickets Available",
			type: "Headliner",
		},
		{
			id: 4,
			date: "Nov 15, 2024",
			venue: "Techno Temple",
			location: "Barcelona, Spain",
			status: "Tickets Available",
			type: "Headliner",
		},
		{
			id: 5,
			date: "Nov 28, 2024",
			venue: "Sound System Sessions",
			location: "Paris, France",
			status: "Sold Out",
			type: "Special Event",
		},
	];

	return (
		<section id="shows" className="py-20 bg-black relative overflow-hidden">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-white mb-4">Upcoming Shows</h2>
					<p className="text-white/60 max-w-2xl mx-auto">
						Catch me live at these upcoming events
					</p>
				</motion.div>

				<div className="space-y-4 max-w-4xl mx-auto">
					{shows.map((show, index) => (
						<motion.div
							key={show.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Card className="bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:border-purple-500/50 transition-colors">
								<div className="p-6">
									<div className="flex flex-col lg:flex-row lg:items-center gap-6">
										<div className="flex-shrink-0">
											<div className="text-center bg-purple-600/20 rounded-lg p-4 min-w-24">
												<div className="text-purple-400">
													{show.date.split(" ")[0]}
												</div>
												<div className="text-white mt-1">
													{show.date.split(" ")[1]}
												</div>
											</div>
										</div>

										<div className="flex-1">
											<div className="flex items-start gap-3 mb-3">
												<h3 className="text-white">{show.venue}</h3>
												<Badge
													variant={
														show.type === "Festival" ? "default" : "secondary"
													}
													className={
														show.type === "Festival" ? "bg-purple-600" : ""
													}
												>
													{show.type}
												</Badge>
											</div>
											<div className="flex items-center gap-4 text-white/60 mb-3">
												<div className="flex items-center gap-2">
													<MapPin className="w-4 h-4" />
													<span>{show.location}</span>
												</div>
											</div>
											<div className="flex items-center gap-2">
												<Ticket className="w-4 h-4 text-purple-400" />
												<span
													className={
														show.status === "Sold Out"
															? "text-red-400"
															: show.status === "Almost Sold Out"
																? "text-yellow-400"
																: "text-green-400"
													}
												>
													{show.status}
												</span>
											</div>
										</div>

										<div className="flex-shrink-0">
											<Button
												size="lg"
												className="bg-purple-600 hover:bg-purple-700 w-full lg:w-auto"
												disabled={show.status === "Sold Out"}
											>
												{show.status === "Sold Out"
													? "Sold Out"
													: "Get Tickets"}
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
