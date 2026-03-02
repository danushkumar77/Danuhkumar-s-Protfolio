import { Navbar } from "./Navbar";

export default function Layout({ children, theme, toggleTheme }) {
    return (
        <div className="min-h-screen bg-dark-900 transition-colors duration-300">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main className="mx-auto w-[95%] max-w-[1600px] px-4 pb-20 pt-32 lg:px-8">
                {children}
            </main>

            {/* Background glow effects */}
            <div className="fixed inset-0 -z-50 overflow-hidden">
                <div className="absolute top-[10%] left-[20%] h-[400px] w-[400px] rounded-full bg-accent-blue/10 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-accent-purple/10 blur-[100px]" />
            </div>

            <footer className="border-t border-white/5 py-12">
                <div className="container mx-auto px-4 text-center text-sm text-white/30">
                    <p>© {new Date().getFullYear()} Danushkumar VS. Built with passion & precision.</p>
                </div>
            </footer>
        </div>
    );
};
