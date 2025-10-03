import { Instagram, Mail, Music2, Twitter, Youtube } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
	const socialLinks = [
		{ icon: Instagram, label: "Instagram", url: "#" },
		{ icon: Twitter, label: "Twitter", url: "#" },
		{ icon: Youtube, label: "YouTube", url: "#" },
		{ icon: Music2, label: "SoundCloud", url: "#" },
	];

	return (
		<section id="contact" className="py-20 bg-zinc-950">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-white mb-4">Get In Touch</h2>
					<p className="text-white/60 max-w-2xl mx-auto">
						For bookings, collaborations, or just to say hi
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
					>
						<div className="space-y-6">
							<div>
								<h3 className="text-white mb-4">Send a Message</h3>
								<form className="space-y-4">
									<div className="grid sm:grid-cols-2 gap-4">
										<Input
											placeholder="Your Name"
											className="bg-zinc-900 border-zinc-800 text-white placeholder:text-white/40"
										/>
										<Input
											type="email"
											placeholder="Your Email"
											className="bg-zinc-900 border-zinc-800 text-white placeholder:text-white/40"
										/>
									</div>
									<Input
										placeholder="Subject"
										className="bg-zinc-900 border-zinc-800 text-white placeholder:text-white/40"
									/>
									<Textarea
										placeholder="Your Message"
										rows={6}
										className="bg-zinc-900 border-zinc-800 text-white placeholder:text-white/40"
									/>
									<Button className="w-full bg-purple-600 hover:bg-purple-700">
										<Mail className="w-4 h-4 mr-2" />
										Send Message
									</Button>
								</form>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-white mb-4">Connect</h3>
							<div className="grid grid-cols-2 gap-4">
								{socialLinks.map((social, index) => (
									<motion.a
										key={social.label}
										href={social.url}
										className="flex items-center gap-3 p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-purple-500/50 transition-colors group"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<social.icon className="w-5 h-5 text-purple-500" />
										<span className="text-white/80 group-hover:text-white transition-colors">
											{social.label}
										</span>
									</motion.a>
								))}
							</div>
						</div>

						<div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8">
							<h3 className="text-white mb-4">Booking Info</h3>
							<div className="space-y-3 text-white/70">
								<p>
									<span className="text-white">Email:</span> booking@djnexus.com
								</p>
								<p>
									<span className="text-white">Management:</span>{" "}
									contact@djnexus.com
								</p>
								<p>
									<span className="text-white">Press:</span> press@djnexus.com
								</p>
							</div>
							<div className="mt-6 pt-6 border-t border-purple-500/30">
								<p className="text-white/60">
									Available for festivals, club nights, private events, and
									collaborations worldwide.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
