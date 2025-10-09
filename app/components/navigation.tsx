import {
	Calendar,
	ChevronLeft,
	ChevronRight,
	Disc3,
	Home,
	Mail,
	Menu,
	Music,
	Radio,
	X,
} from "lucide-react";
import * as React from "react";
import { Button } from "~/components/ui/button";

interface NavigationContextType {
	isCollapsed: boolean;
	toggleCollapse: () => void;
}

const NavigationContext = React.createContext<
	NavigationContextType | undefined
>(undefined);

export function NavigationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isCollapsed, setIsCollapsed] = React.useState(false);

	const toggleCollapse = () => {
		setIsCollapsed((prev) => !prev);
	};

	return (
		<NavigationContext.Provider value={{ isCollapsed, toggleCollapse }}>
			{children}
		</NavigationContext.Provider>
	);
}

export function useNavigation() {
	const context = React.useContext(NavigationContext);
	if (context === undefined) {
		throw new Error("useNavigation must be used within a NavigationProvider");
	}
	return context;
}

export function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
	const { isCollapsed, toggleCollapse } = useNavigation();

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMobileMenuOpen(false);
		}
	};

	const navItems = [
		{ label: "About", id: "about", icon: Home },
		{ label: "Music", id: "music", icon: Disc3 },
		{ label: "Mixes", id: "mixes", icon: Radio },
		{ label: "Shows", id: "shows", icon: Calendar },
		{ label: "Contact", id: "contact", icon: Mail },
	];

	return (
		<>
			{/* Desktop Sidebar */}
			<nav
				className={`hidden lg:flex fixed left-0 top-0 h-screen bg-black/90 backdrop-blur-md border-r border-zinc-800 z-50 flex-col transition-all duration-300 ${
					isCollapsed ? "w-20" : "w-64"
				}`}
			>
				<div className={`p-8 ${isCollapsed ? "px-4" : ""}`}>
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className={`flex items-center gap-3 text-white tracking-wider hover:text-purple-400 transition-colors ${
							isCollapsed ? "justify-center" : ""
						}`}
					>
						<Music className="w-6 h-6 flex-shrink-0" />
						{!isCollapsed && <span>KVNCPT</span>}
					</button>
				</div>

				<div className={`flex-1 py-8 ${isCollapsed ? "px-2" : "px-6"}`}>
					<div className="space-y-2">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-purple-600/20 transition-all ${
									isCollapsed ? "justify-center" : ""
								}`}
								title={isCollapsed ? item.label : undefined}
							>
								<item.icon className="w-5 h-5 flex-shrink-0" />
								{!isCollapsed && <span>{item.label}</span>}
							</button>
						))}
					</div>
				</div>

				{!isCollapsed && (
					<div className="p-6 border-t border-zinc-800">
						<p className="text-white/40">Electronic Music Producer & DJ</p>
					</div>
				)}

				{/* Collapse Toggle Button */}
				<div
					className={`p-4 border-t border-zinc-800 ${isCollapsed ? "flex justify-center" : ""}`}
				>
					<Button
						variant="ghost"
						size="sm"
						onClick={toggleCollapse}
						className="text-white/60 hover:text-white hover:bg-purple-600/20"
					>
						{isCollapsed ? (
							<ChevronRight className="w-5 h-5" />
						) : (
							<ChevronLeft className="w-5 h-5" />
						)}
						{!isCollapsed && <span className="ml-2">Collapse</span>}
					</Button>
				</div>
			</nav>

			{/* Mobile Header */}
			<nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800">
				<div className="flex justify-between items-center h-16 px-4">
					<button
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
						className="flex items-center gap-2 text-white tracking-wider hover:text-purple-400 transition-colors"
					>
						<Music className="w-5 h-5" />
						<span>KVNCPT</span>
					</button>

					<button
						className="text-white"
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isMobileMenuOpen && (
					<div className="bg-black/95 border-t border-zinc-800">
						{navItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-purple-600/20 transition-all"
							>
								{item.label}
							</button>
						))}
					</div>
				)}
			</nav>
		</>
	);
}
