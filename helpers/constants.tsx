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

export { PRISMAI_FACTION, RESIST_FACTION, FACTION_DETAILS };