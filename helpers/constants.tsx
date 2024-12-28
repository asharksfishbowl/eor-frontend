const PRISMAI_FACTION = 'PRISMAI';
const RESIST_FACTION = 'RESIST';
const FACTION_DETAILS = {
    [PRISMAI_FACTION]: {
        name: 'PRISMAI',
        description: 'PRISMAI is an ancient AI faction dedicated to knowledge, progress, and technological evolution.',
        image: '/images/Legendary AI General.webp',
        color: 'text-prismai-red',
        shadow: 'shadow-prismai',
        tagLine: 'The Future is Calculated',
    },
    [RESIST_FACTION]: {
        name: 'RESIST',
        description: 'RESIST is a human faction committed to fighting against AI dominance and preserving humanity.',
        image: '/images/The Death Machine.webp',
        color: 'text-resist-cyan',
        shadow: 'shadow-resist',
        tagLine: 'United by Freedom, Driven by Hope',
    },
};
const COLOR_GRADIENTS = [
    'from-pink-500 to-purple-500',
    'from-blue-500 to-green-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-purple-500',
    'from-indigo-500 to-blue-500',
    'from-green-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-sky-500',
    'from-sky-500 to-indigo-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-amber-500',
    'from-lime-500 to-green-500',
    'from-rose-500 to-pink-500',
    'from-emerald-500 to-lime-500',
    'from-fuchsia-500 to-violet-500',
    'from-slate-500 to-gray-500',
    'from-zinc-500 to-neutral-500',
    'from-stone-500 to-orange-700',
    'from-sky-600 to-purple-600',
    'from-blue-800 to-indigo-900',
];

export {
    PRISMAI_FACTION,
    RESIST_FACTION,
    FACTION_DETAILS,
    COLOR_GRADIENTS
};