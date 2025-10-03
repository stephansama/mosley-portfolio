export function Footer() {
	return (
		<footer className="bg-black py-8 border-t border-zinc-900">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-white/60">
						&copy; {new Date().getFullYear()} DJ Nexus. All rights reserved.
					</div>
					<div className="flex gap-6 text-white/60">
						<a href="#" className="hover:text-white transition-colors">
							Privacy Policy
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
