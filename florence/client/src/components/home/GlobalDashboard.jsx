import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

const nodes = [
    { id: 'US', name: 'USA', x: 15, y: 40, flag: '🇺🇸', color: '#00d4ff' },
    { id: 'BR', name: 'BRAZIL', x: 25, y: 70, flag: '🇧🇷', color: '#00d4ff' },
    { id: 'UK', name: 'UK', x: 45, y: 30, flag: '🇬🇧', color: '#d4a843' },
    { id: 'DE', name: 'GERMANY', x: 50, y: 25, flag: '🇩🇪', color: '#d4a843' },
    { id: 'IT', name: 'ITALY', x: 52, y: 35, flag: '🇮🇹', color: '#d4a843', isMain: true },
    { id: 'AE', name: 'UAE', x: 62, y: 45, flag: '🇦🇪', color: '#d4a843' },
    { id: 'IN', name: 'INDIA', x: 72, y: 50, flag: '🇮🇳', color: '#d4a843', isMain: true },
    { id: 'SG', name: 'SINGAPORE', x: 78, y: 65, flag: '🇸🇬', color: '#00d4ff' },
    { id: 'CN', name: 'CHINA', x: 82, y: 40, flag: '🇨🇳', color: '#00d4ff' },
    { id: 'JP', name: 'JAPAN', x: 90, y: 35, flag: '🇯🇵', color: '#00d4ff' },
];

const connections = [
    { from: 'IN', to: 'IT' },
    { from: 'IN', to: 'AE' },
    { from: 'IN', to: 'SG' },
    { from: 'IN', to: 'UK' },
    { from: 'IN', to: 'US' },
    { from: 'IT', to: 'DE' },
    { from: 'IT', to: 'UK' },
    { from: 'IT', to: 'US' },
    { from: 'US', to: 'UK' },
    { from: 'US', to: 'BR' },
    { from: 'AE', to: 'UK' },
    { from: 'SG', to: 'CN' },
    { from: 'SG', to: 'JP' },
    { from: 'CN', to: 'JP' },
    { from: 'DE', to: 'UK' }
];

const fakeStats = [
    "₹ 2.4B Trade Volume",
    "142 Active Connections",
    "New Logistics Hub Open",
    "€ 850M Tech Investment",
    "Direct Supply Chain Active",
    "Strategic Partnership Signed",
    "B2B Matchmaking Event Live"
];

const GlobalDashboard = () => {
    const [activeNode, setActiveNode] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
            const randomStat = fakeStats[Math.floor(Math.random() * fakeStats.length)];
            setActiveNode({ ...randomNode, stat: randomStat });
            setTimeout(() => { setActiveNode(null); }, 2000);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute inset-0 z-0 bg-[#0a1628] overflow-hidden dashboard-container">

            {/* World Map Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none mix-blend-screen"
            >
                <source src="/world-map-bg.mp4" type="video/mp4" />
            </video>

            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {connections.map((conn, i) => {
                    const fromNode = nodes.find(n => n.id === conn.from);
                    const toNode = nodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    const isActiveLine = activeNode && (conn.from === activeNode.id || conn.to === activeNode.id);

                    return (
                        <g key={`${conn.from}-${conn.to}-${i}`}>
                            {/* Base Line */}
                            <line
                                x1={`${fromNode.x}%`}
                                y1={`${fromNode.y}%`}
                                x2={`${toNode.x}%`}
                                y2={`${toNode.y}%`}
                                stroke={isActiveLine ? '#E8C96D' : '#C9A84C'}
                                strokeWidth={isActiveLine ? "1.5" : "0.5"}
                                opacity={isActiveLine ? 1 : 0.4}
                                className={`transition-all duration-500`}
                            />
                            {/* Flowing Particles along the straight line using CSS dash offset looping */}
                            <line
                                x1={`${fromNode.x}%`}
                                y1={`${fromNode.y}%`}
                                x2={`${toNode.x}%`}
                                y2={`${toNode.y}%`}
                                stroke="#fff"
                                strokeWidth="2"
                                opacity="0.8"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: "2 100",
                                }}
                                className="dashboard-particle-flow opacity-60"
                                filter="url(#glow)"
                            />
                        </g>
                    );
                })}
            </svg>

            {/* Center Globe Icons for Interstitial Nodes */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {connections.map((conn, i) => {
                    const fromNode = nodes.find(n => n.id === conn.from);
                    const toNode = nodes.find(n => n.id === conn.to);
                    if (!fromNode || !toNode) return null;

                    // Show a globe at the center of the key "India-Italy" connection to match the user screenshot precisely
                    if ((conn.from === 'IN' && conn.to === 'IT')) {
                        const cx = (fromNode.x + toNode.x) / 2;
                        const cy = (fromNode.y + toNode.y) / 2;

                        return (
                            <div
                                key={`globe-${i}`}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center dashboard-center-globe"
                                style={{ left: `${cx}%`, top: `${cy}%` }}
                            >
                                <div className="absolute w-12 h-12 rounded-full border border-gold/20 animate-spin-slow"></div>
                                <div className="absolute w-8 h-8 rounded-full border border-gold/40 animate-spin-reverse-slow"></div>
                                <div className="bg-[#0a1628] rounded-full p-1 text-gold shadow-[0_0_15px_rgba(201,168,76,0.6)]">
                                    <Globe size={18} strokeWidth={1.5} />
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            {/* Render Nodes (Countries) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {nodes.map(node => {
                    const isHighlighted = activeNode && activeNode.id === node.id;
                    return (
                        <div
                            key={node.id}
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{
                                left: `${node.x}%`,
                                top: `${node.y}%`
                            }}
                        >
                            <div className="relative flex flex-col items-center">
                                {/* Pulse Ring */}
                                <div
                                    className={`absolute rounded-full border border-[${node.color}] dashboard-pulse`}
                                    style={{
                                        width: node.isMain ? '40px' : '30px',
                                        height: node.isMain ? '40px' : '30px',
                                        borderColor: node.color,
                                        opacity: isHighlighted ? 0.8 : 0.3
                                    }}
                                />

                                {/* Inner Dot */}
                                <div
                                    className="rounded-full flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(212,168,67,0.6)]"
                                    style={{
                                        width: node.isMain ? '12px' : '8px',
                                        height: node.isMain ? '12px' : '8px',
                                        backgroundColor: node.color
                                    }}
                                />

                                {/* Label positioned safely below */}
                                <div className="absolute top-4 w-32 flex flex-col items-center">
                                    <span className={`mt-2 font-mono text-[10px] uppercase font-bold tracking-widest transition-colors duration-300 ${isHighlighted ? 'text-white' : 'text-white/40'}`}>
                                        {node.name}
                                    </span>
                                </div>

                                {/* Active Tooltip */}
                                <AnimatePresence>
                                    {isHighlighted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5, scale: 0.9 }}
                                            className="absolute bottom-12 whitespace-nowrap bg-[#0a1628]/90 border border-gold/40 text-white rounded px-3 py-1.5 text-xs font-mono shadow-[0_0_20px_rgba(212,168,67,0.2)] backdrop-blur-sm z-50 pointer-events-none"
                                        >
                                            <div className="flex items-center gap-2">
                                                <span>{node.flag}</span>
                                                <span className="text-gold font-semibold">{node.name}</span>
                                            </div>
                                            <div className="text-white/80 mt-1 text-[10px]">
                                                {activeNode.stat}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GlobalDashboard;
