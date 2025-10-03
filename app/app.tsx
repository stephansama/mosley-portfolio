import { About } from "~/components/about";
import { Contact } from "~/components/contact";
import { Footer } from "~/components/footer";
import { Hero } from "~/components/hero";
import { Mixes } from "~/components/mixes";
import { Music } from "~/components/music";
import {
	Navigation,
	NavigationProvider,
	useNavigation,
} from "~/components/navigation";
import { Shows } from "~/components/shows";

function AppContent() {
	const { isCollapsed } = useNavigation();

	return (
		<div className="min-h-screen bg-black">
			<Navigation />
			<div
				className={`transition-all duration-300 ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}`}
			>
				<Hero />
				<About />
				<Music />
				<Mixes />
				<Shows />
				<Contact />
				<Footer />
			</div>
		</div>
	);
}

export default function App() {
	return (
		<NavigationProvider>
			<AppContent />
		</NavigationProvider>
	);
}
