import { motion } from 'framer-motion';

const DashboardStatusBar = () => {
    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-[#050b14]/80 backdrop-blur-md border border-[#1a2e4c] rounded-full px-6 py-3 flex items-center gap-6 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            >
                <div className="flex items-center gap-2 border-r border-[#1a2e4c] pr-6">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold font-mono text-xs uppercase tracking-widest whitespace-nowrap">
                        Global Business Network
                    </span>
                </div>

                <div className="flex items-center gap-6 text-sm font-mono text-white/70 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold">10</span>
                        <span>Countries</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#1a2e4c]" />
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold">24</span>
                        <span>Active Routes</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-[#1a2e4c]" />
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold">$12.8B</span>
                        <span>Network Value</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default DashboardStatusBar;
