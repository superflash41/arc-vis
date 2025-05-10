import type { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
    infoText?: string;
}

export default function Layout({ children, infoText = "Visualization tool for the Abstract Reasoning Corpus" }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-black text-white shadow-md">
                <div className="container mx-auto flex justify-between items-center p-6">
                    <a href="/arc-vis/" className="inline-block">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/arc-vis.png`}
                            alt="ARC-VIS Logo"
                            className="h-24"
                        />
                    </a>
                    <a href="https://github.com/superflash41" className="inline-block">
                        <img
                            src={`${import.meta.env.BASE_URL}assets/madeby.png`}
                            alt="Superflash Logo"
                            className="h-24"
                        />
                    </a>
                </div>
            </header>

            {/* Info Text Section */}
            <div className="bg-yellow-100 shadow-lg p-3 mb-6">
                <div className="container mx-auto">
                    {/* make it move have some lateral padding */}
                    <p className="text-gray-700 text-center text-sm">{infoText}</p>
                </div>
            </div>

            {/* Main Content */}
            <main className="container mx-auto flex-grow px-4 py-2">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-[var(--arc-0)] text-white p-6 mt-8">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-lg font-semibold mb-2">made by sn</h3>
                            <p className="text-sm opacity-75">superflash41</p>
                            <p className="text-sm opacity-25">PUCP</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">References</h3>
                            {/* the links hsould be aligned to the right */}
                            <ul className="text-sm opacity-75 text-right">
                                <li className="mb-1"><a href="https://github.com/fchollet/ARC" className="hover:text-[var(--arc-4)]">ARC-AGI</a></li>
                                {/* <li><a href="https://arxiv.org/abs/1911.01547" className="hover:text-[var(--arc-4)]">Original Paper</a></li> */}
                                <li><a href="https://github.com/superflash41/arc-vis" className="hover:text-[var(--arc-4)]">ARC-VIS</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-white border-opacity-20 text-sm opacity-50 text-center">
                        &copy; {new Date().getFullYear()} ARC-VIS
                    </div>
                </div>
            </footer >
        </div >
    );
}